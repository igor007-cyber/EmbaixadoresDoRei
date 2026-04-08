<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Drive UI</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    .glass {
      backdrop-filter: blur(10px);
      background: rgba(255,255,255,0.6);
    }
  </style>
</head>

<body class="bg-gradient-to-br from-blue-100 to-purple-200 font-sans">

<div class="flex h-screen">

  <!-- Sidebar -->
  <aside class="w-64 bg-gradient-to-b from-blue-700 to-blue-500 text-white flex flex-col p-5 shadow-xl">

    <h1 class="text-2xl font-bold mb-8 tracking-wide">Drive</h1>

    <button onclick="uploadFile()" 
      class="bg-white text-blue-600 px-4 py-2 rounded-xl mb-8 font-semibold shadow hover:scale-105 transition">
      + Upload
    </button>

    <nav class="space-y-4 text-sm">
      <p class="hover:translate-x-1 transition cursor-pointer">📁 My Drive</p>
      <p class="hover:translate-x-1 transition cursor-pointer">💻 Computers</p>
      <p class="hover:translate-x-1 transition cursor-pointer">👥 Shared</p>
      <p class="hover:translate-x-1 transition cursor-pointer">🕒 Recent</p>
      <p class="hover:translate-x-1 transition cursor-pointer">⭐ Starred</p>
      <p class="hover:translate-x-1 transition cursor-pointer">🗑 Trash</p>
    </nav>

    <div class="mt-auto">
      <p class="text-xs mt-6 mb-2">Storage</p>
      <div class="w-full bg-blue-300 h-2 rounded-full overflow-hidden">
        <div class="bg-white h-2 rounded-full w-1/3 animate-pulse"></div>
      </div>
    </div>

  </aside>

  <!-- Main -->
  <main class="flex-1 p-8 overflow-y-auto">

    <!-- Top -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold text-gray-700">My Drive</h2>

      <input type="text"
        placeholder="Search..."
        class="glass px-4 py-2 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400">
    </div>

    <!-- Quick Access -->
    <h3 class="text-gray-600 mb-4 font-semibold">Quick Access</h3>

    <div class="grid grid-cols-4 gap-6 mb-10">

      <div class="bg-gradient-to-br from-blue-500 to-blue-400 text-white p-5 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer">
        <p class="font-semibold">Design Files</p>
      </div>

      <div class="glass p-5 rounded-2xl shadow hover:scale-105 transition cursor-pointer">
        Google Photos
      </div>

      <div class="glass p-5 rounded-2xl shadow hover:scale-105 transition cursor-pointer">
        Training Materials
      </div>

      <div class="glass p-5 rounded-2xl shadow hover:scale-105 transition cursor-pointer">
        Project Summary
      </div>

    </div>

    <!-- Files -->
    <h3 class="text-gray-600 mb-4 font-semibold">All Files</h3>

    <div class="glass rounded-2xl shadow overflow-hidden">

      <table class="w-full">
        <thead class="bg-white/70">
          <tr>
            <th class="p-4 text-left">Name</th>
            <th class="p-4 text-left">Owner</th>
            <th class="p-4 text-left">Last Modified</th>
            <th class="p-4 text-left">Size</th>
          </tr>
        </thead>

        <tbody id="fileList"></tbody>
      </table>

    </div>

  </main>
</div>

<script>
  let files = [
    { name: "Weekly Reports.docx", owner: "Caio", date: "Hoje", size: "20 MB" },
    { name: "Design Checklist.xlsx", owner: "Maria", date: "Ontem", size: "13 MB" },
    { name: "Project.pdf", owner: "João", date: "2 dias atrás", size: "5 MB" }
  ];

  function renderFiles() {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    files.forEach(file => {
      fileList.innerHTML += `
        <tr onclick="selectFile(this)" 
            class="cursor-pointer hover:bg-blue-50 transition">

          <td class="p-4">${file.name}</td>
          <td class="p-4">${file.owner}</td>
          <td class="p-4">${file.date}</td>
          <td class="p-4">${file.size}</td>

        </tr>
      `;
    });
  }

  function selectFile(row) {
    document.querySelectorAll("tr").forEach(tr => tr.classList.remove("bg-blue-100"));
    row.classList.add("bg-blue-100");
  }

  function uploadFile() {
    const name = prompt("Nome do arquivo:");
    if (!name) return;

    files.push({
      name,
      owner: "Você",
      date: "Agora",
      size: Math.floor(Math.random() * 10 + 1) + " MB"
    });

    renderFiles();
  }

  renderFiles();
</script>

</body>
</html>