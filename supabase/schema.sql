-- Execute este script no SQL Editor do Supabase.
-- Ele cria a tabela de perfis, os papeis de acesso, o trigger de cadastro
-- automatico e as policies basicas de seguranca.

do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'user_role'
  ) then
    create type public.user_role as enum ('admin', 'usuario');
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'manual_tipo'
  ) then
    create type public.manual_tipo as enum ('Arauto', 'Escudeiro', 'Sênior', 'Emérito', 'Futuro Membro');
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_enum
    where enumlabel = 'Futuro Membro'
      and enumtypid = 'public.manual_tipo'::regtype
  ) then
    alter type public.manual_tipo add value 'Futuro Membro';
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'sim_nao_tipo'
  ) then
    create type public.sim_nao_tipo as enum ('Sim', 'Não');
  end if;
end
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  nome_conselheiro text not null,
  nome_embaixada text not null,
  email text not null,
  quantidade_pessoas text not null check (quantidade_pessoas in ('0-20', '21-1000')),
  cidade text not null,
  estado varchar(2) not null,
  nome_igreja text not null,
  role public.user_role not null default 'usuario',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.embaixadores (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  nome text not null,
  email text not null,
  idade integer not null check (idade > 0),
  telefone text not null,
  nome_responsavel text not null,
  telefone_responsavel text not null,
  manual public.manual_tipo not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.conselheiros (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  nome text not null,
  idade integer not null check (idade > 0),
  telefone text not null,
  tem_curso public.sim_nao_tipo not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.reunioes (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  dia integer not null check (dia between 1 and 31),
  horario time not null,
  mes integer not null check (mes between 0 and 11),
  ano integer not null check (ano >= 2000),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.presencas (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  reuniao_id uuid not null references public.reunioes(id) on delete cascade,
  embaixador_id uuid references public.embaixadores(id) on delete cascade,
  conselheiro_id uuid references public.conselheiros(id) on delete cascade,
  presente boolean not null default false,
  versiculo boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint presencas_um_participante check (
    (embaixador_id is not null and conselheiro_id is null)
    or
    (embaixador_id is null and conselheiro_id is not null)
  )
);

create table if not exists public.atividades (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  embaixador_id uuid not null references public.embaixadores(id) on delete cascade,
  descricao text not null,
  feito boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table if exists public.profiles
  alter column username type text using username::text;

alter table if exists public.profiles
  alter column email type text using email::text;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;

create trigger profiles_set_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists embaixadores_set_updated_at on public.embaixadores;

create trigger embaixadores_set_updated_at
before update on public.embaixadores
for each row
execute function public.set_updated_at();

drop trigger if exists conselheiros_set_updated_at on public.conselheiros;

create trigger conselheiros_set_updated_at
before update on public.conselheiros
for each row
execute function public.set_updated_at();

drop trigger if exists reunioes_set_updated_at on public.reunioes;

create trigger reunioes_set_updated_at
before update on public.reunioes
for each row
execute function public.set_updated_at();

drop trigger if exists presencas_set_updated_at on public.presencas;

create trigger presencas_set_updated_at
before update on public.presencas
for each row
execute function public.set_updated_at();

drop trigger if exists atividades_set_updated_at on public.atividades;

create trigger atividades_set_updated_at
before update on public.atividades
for each row
execute function public.set_updated_at();

create unique index if not exists profiles_username_unique_lower
on public.profiles (lower(username));

create unique index if not exists profiles_email_unique_lower
on public.profiles (lower(email));

create unique index if not exists embaixadores_profile_email_unique_lower
on public.embaixadores (profile_id, lower(email));

create index if not exists embaixadores_profile_id_idx
on public.embaixadores (profile_id);

create index if not exists conselheiros_profile_id_idx
on public.conselheiros (profile_id);

create index if not exists reunioes_profile_id_idx
on public.reunioes (profile_id);

create index if not exists presencas_profile_id_idx
on public.presencas (profile_id);

create index if not exists presencas_reuniao_id_idx
on public.presencas (reuniao_id);

create index if not exists atividades_profile_id_idx
on public.atividades (profile_id);

create index if not exists atividades_embaixador_id_idx
on public.atividades (embaixador_id);

create unique index if not exists presencas_reuniao_embaixador_unique
on public.presencas (reuniao_id, embaixador_id)
where embaixador_id is not null;

create unique index if not exists presencas_reuniao_conselheiro_unique
on public.presencas (reuniao_id, conselheiro_id)
where conselheiro_id is not null;

create or replace function public.generate_unique_username(base_username text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  candidate text;
  suffix integer := 0;
begin
  candidate := nullif(lower(trim(base_username)), '');

  if candidate is null then
    candidate := 'usuario';
  end if;

  loop
    exit when not exists (
      select 1
      from public.profiles
      where lower(username) = lower(candidate)
    );

    suffix := suffix + 1;
    candidate := lower(trim(base_username)) || '-' || suffix::text;
  end loop;

  return candidate;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text;
  v_username text;
begin
  v_email := lower(coalesce(new.raw_user_meta_data ->> 'email', new.email, ''));
  v_username := public.generate_unique_username(
    coalesce(
      nullif(trim(new.raw_user_meta_data ->> 'username'), ''),
      nullif(split_part(v_email, '@', 1), ''),
      'usuario-' || left(new.id::text, 8)
    )
  );

  begin
    insert into public.profiles (
      id,
      username,
      nome_conselheiro,
      nome_embaixada,
      email,
      quantidade_pessoas,
      cidade,
      estado,
      nome_igreja,
      role
    )
    values (
      new.id,
      v_username,
      coalesce(nullif(trim(new.raw_user_meta_data ->> 'nomeConselheiro'), ''), 'Administrador'),
      coalesce(nullif(trim(new.raw_user_meta_data ->> 'nomeEmbaixada'), ''), 'Administracao'),
      v_email,
      coalesce(nullif(new.raw_user_meta_data ->> 'quantidadePessoas', ''), '0-20'),
      coalesce(nullif(trim(new.raw_user_meta_data ->> 'cidade'), ''), 'Nao informado'),
      upper(left(coalesce(nullif(trim(new.raw_user_meta_data ->> 'estado'), ''), 'NI'), 2)),
      coalesce(nullif(trim(new.raw_user_meta_data ->> 'nomeIgreja'), ''), 'Nao informada'),
      case
        when v_email = 'admin@gmail.com' then 'admin'
        else 'usuario'
      end
    );
  exception when others then
    raise warning 'handle_new_user falhou para % (%): %', new.id, v_email, sqlerrm;
  end;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.username_exists(p_username text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where username = lower(trim(p_username))
  );
$$;

grant execute on function public.username_exists(text) to anon, authenticated;

alter table public.profiles enable row level security;
alter table public.embaixadores enable row level security;
alter table public.conselheiros enable row level security;
alter table public.reunioes enable row level security;
alter table public.presencas enable row level security;
alter table public.atividades enable row level security;

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
on public.profiles
for select
using (auth.uid() = id or public.is_admin());

drop policy if exists "profiles_update_own_or_admin" on public.profiles;
create policy "profiles_update_own_or_admin"
on public.profiles
for update
using (auth.uid() = id or public.is_admin())
with check (auth.uid() = id or public.is_admin());

drop policy if exists "profiles_insert_service_only" on public.profiles;
create policy "profiles_insert_service_only"
on public.profiles
for insert
with check (false);

drop policy if exists "embaixadores_select_own_or_admin" on public.embaixadores;
create policy "embaixadores_select_own_or_admin"
on public.embaixadores
for select
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "embaixadores_insert_own_or_admin" on public.embaixadores;
create policy "embaixadores_insert_own_or_admin"
on public.embaixadores
for insert
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "embaixadores_update_own_or_admin" on public.embaixadores;
create policy "embaixadores_update_own_or_admin"
on public.embaixadores
for update
using (auth.uid() = profile_id or public.is_admin())
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "embaixadores_delete_own_or_admin" on public.embaixadores;
create policy "embaixadores_delete_own_or_admin"
on public.embaixadores
for delete
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "conselheiros_select_own_or_admin" on public.conselheiros;
create policy "conselheiros_select_own_or_admin"
on public.conselheiros
for select
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "conselheiros_insert_own_or_admin" on public.conselheiros;
create policy "conselheiros_insert_own_or_admin"
on public.conselheiros
for insert
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "conselheiros_update_own_or_admin" on public.conselheiros;
create policy "conselheiros_update_own_or_admin"
on public.conselheiros
for update
using (auth.uid() = profile_id or public.is_admin())
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "conselheiros_delete_own_or_admin" on public.conselheiros;
create policy "conselheiros_delete_own_or_admin"
on public.conselheiros
for delete
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "reunioes_select_own_or_admin" on public.reunioes;
create policy "reunioes_select_own_or_admin"
on public.reunioes
for select
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "reunioes_insert_own_or_admin" on public.reunioes;
create policy "reunioes_insert_own_or_admin"
on public.reunioes
for insert
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "reunioes_update_own_or_admin" on public.reunioes;
create policy "reunioes_update_own_or_admin"
on public.reunioes
for update
using (auth.uid() = profile_id or public.is_admin())
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "reunioes_delete_own_or_admin" on public.reunioes;
create policy "reunioes_delete_own_or_admin"
on public.reunioes
for delete
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "presencas_select_own_or_admin" on public.presencas;
create policy "presencas_select_own_or_admin"
on public.presencas
for select
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "presencas_insert_own_or_admin" on public.presencas;
create policy "presencas_insert_own_or_admin"
on public.presencas
for insert
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "presencas_update_own_or_admin" on public.presencas;
create policy "presencas_update_own_or_admin"
on public.presencas
for update
using (auth.uid() = profile_id or public.is_admin())
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "presencas_delete_own_or_admin" on public.presencas;
create policy "presencas_delete_own_or_admin"
on public.presencas
for delete
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "atividades_select_own_or_admin" on public.atividades;
create policy "atividades_select_own_or_admin"
on public.atividades
for select
using (auth.uid() = profile_id or public.is_admin());

drop policy if exists "atividades_insert_own_or_admin" on public.atividades;
create policy "atividades_insert_own_or_admin"
on public.atividades
for insert
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "atividades_update_own_or_admin" on public.atividades;
create policy "atividades_update_own_or_admin"
on public.atividades
for update
using (auth.uid() = profile_id or public.is_admin())
with check (auth.uid() = profile_id or public.is_admin());

drop policy if exists "atividades_delete_own_or_admin" on public.atividades;
create policy "atividades_delete_own_or_admin"
on public.atividades
for delete
using (auth.uid() = profile_id or public.is_admin());

create or replace view public.progresso_embaixadores
with (security_invoker = true) as
select
  e.id as embaixador_id,
  e.profile_id,
  e.nome,
  e.manual,
  count(a.id)::integer as total_atividades,
  count(a.id) filter (where a.feito)::integer as atividades_feitas,
  case
    when count(a.id) = 0 then 0
    else round((count(a.id) filter (where a.feito)::numeric / count(a.id)::numeric) * 100)
  end::integer as progresso_percentual
from public.embaixadores e
left join public.atividades a
  on a.embaixador_id = e.id
group by e.id, e.profile_id, e.nome, e.manual;

-- Promove manualmente um usuario para admin:
-- update public.profiles
-- set role = 'admin'
-- where email = 'seu-email@exemplo.com';

-- Depois de atualizar este script, voce pode criar o usuario
-- admin@gmail.com pelo painel do Supabase Authentication.
-- O trigger acima ja vai criar o profile e marcar role = 'admin'
-- automaticamente para esse email.

-- Estrutura baseada no codigo atual:
-- public.embaixadores:
--   nome, email, idade, telefone, nome_responsavel, telefone_responsavel, manual
-- public.conselheiros:
--   nome, idade, telefone, tem_curso
-- public.reunioes:
--   dia, horario, mes, ano
-- public.presencas:
--   reuniao_id + embaixador_id/conselheiro_id + presente + versiculo
-- public.atividades:
--   embaixador_id + descricao + feito
-- public.progresso_embaixadores:
--   view calculada a partir de embaixadores + atividades
