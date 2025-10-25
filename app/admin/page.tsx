"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  LogOut,
  Home,
  Package,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

// ===========================================
// 🔹 Komponen Halaman (Baru)
// ===========================================

function ProdukContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Package size={30} /> Manajemen Produk
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-md min-h-[50vh]">
        <p>
          Di sini akan ada daftar lengkap produk, fitur tambah/edit/hapus, dan
          pencarian.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Halaman ini dimuat melalui Conditional Rendering.
        </p>
      </div>
    </div>
  );
}

function PenggunaContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Users size={30} /> Manajemen Pengguna
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-md min-h-[50vh]">
        <p>Di sini akan ada daftar pengguna, peran, dan manajemen akses.</p>
        <p className="mt-4 text-sm text-gray-500">
          Halaman ini dimuat melalui Conditional Rendering.
        </p>
      </div>
    </div>
  );
}

function LaporanContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <BarChart3 size={30} /> Laporan & Analitik
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-md min-h-[50vh]">
        <p>
          Di sini akan ditampilkan grafik, data penjualan, dan statistik UMKM.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Halaman ini dimuat melalui Conditional Rendering.
        </p>
      </div>
    </div>
  );
}

function PengaturanContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Settings size={30} /> Pengaturan Sistem
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-md min-h-[50vh]">
        <p>
          Di sini akan ada opsi untuk konfigurasi sistem, akun admin, dan
          notifikasi.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Halaman ini dimuat melalui Conditional Rendering.
        </p>
      </div>
    </div>
  );
}

// 🔹 Komponen Kartu Statistik (Tidak Berubah)
function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h4 className="text-2xl font-bold text-gray-800 mt-1">{value}</h4>
      </div>
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full">{icon}</div>
    </div>
  );
}

// 🔹 Komponen Item Sidebar (MODIFIKASI: Menerima onClick)
function NavItem({
  icon,
  label,
  open,
  pageKey, // Kunci yang akan digunakan untuk state
  activePage, // State halaman aktif saat ini
  setPage, // Setter untuk mengubah state halaman
}: {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  pageKey: string;
  activePage: string;
  setPage: (key: string) => void;
}) {
  const active = activePage === pageKey;

  return (
    <button
      onClick={() => setPage(pageKey)}
      className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-200 ${
        active
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      {open && <span>{label}</span>}
    </button>
  );
}

// ===========================================
// 🚀 Komponen Utama AdminDashboard (MODIFIKASI)
// ===========================================
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // 👉 State baru untuk melacak halaman yang aktif
  const [activePage, setActivePage] = useState("dashboard");
  const router = useRouter();

  const handleLogout = () => {
    router.back();
  };

  // Fungsi untuk menampilkan konten sesuai state aktif
  const renderContent = () => {
    switch (activePage) {
      case "produk":
        return <ProdukContent />;
      case "pengguna":
        return <PenggunaContent />;
      case "laporan":
        return <LaporanContent />;
      case "pengaturan":
        return <PengaturanContent />;
      case "dashboard":
      default:
        // Konten Dashboard Default Anda
        return (
          <>
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Dashboard Admin
              </h2>
              <div className="flex items-center gap-3 bg-white shadow-md px-4 py-2 rounded-xl">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Admin"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold text-gray-700">Admin UMKM</p>
                  <p className="text-xs text-gray-400">admin@example.com</p>
                </div>
              </div>
            </header>

            {/* Statistik Ringkas */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard
                title="Total UMKM"
                value="128"
                icon={<Package size={30} />}
              />
              <StatCard
                title="Pengguna Aktif"
                value="54"
                icon={<Users size={30} />}
              />
              <StatCard
                title="Total Penjualan"
                value="Rp 12.500.000"
                icon={<BarChart3 size={30} />}
              />
            </section>

            {/* Tabel Produk */}
            <section className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                Daftar Produk Terbaru
              </h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="p-3 border-b">Nama Produk</th>
                    <th className="p-3 border-b">Kategori</th>
                    <th className="p-3 border-b">Harga</th>
                    <th className="p-3 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-3 border-b">Kopi Gayo</td>
                    <td className="p-3 border-b">Minuman</td>
                    <td className="p-3 border-b">Rp 25.000</td>
                    <td className="p-3 border-b text-green-600 font-semibold">
                      Aktif
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-3 border-b">Batik Pekalongan</td>
                    <td className="p-3 border-b">Fashion</td>
                    <td className="p-3 border-b">Rp 120.000</td>
                    <td className="p-3 border-b text-green-600 font-semibold">
                      Aktif
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-3 border-b">Keripik Pisang</td>
                    <td className="p-3 border-b">Makanan</td>
                    <td className="p-3 border-b">Rp 15.000</td>
                    <td className="p-3 border-b text-yellow-600 font-semibold">
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-xl flex flex-col transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1
            className={`text-xl font-bold text-blue-600 transition-opacity duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-200 rounded-lg"
            aria-label="sidebar"
            title="sidebar"
          >
            <Menu size={22} />
          </button>
        </div>

        <nav className="flex-1 mt-4 space-y-1">
          {/* Menggunakan state untuk navigasi */}
          <NavItem
            icon={<Home size={20} />}
            label="Dashboard"
            pageKey="dashboard"
            open={sidebarOpen}
            activePage={activePage}
            setPage={setActivePage}
          />
          <NavItem
            icon={<Package size={20} />}
            label="Produk"
            pageKey="produk"
            open={sidebarOpen}
            activePage={activePage}
            setPage={setActivePage}
          />
          <NavItem
            icon={<Users size={20} />}
            label="Pengguna"
            pageKey="pengguna"
            open={sidebarOpen}
            activePage={activePage}
            setPage={setActivePage}
          />
          <NavItem
            icon={<BarChart3 size={20} />}
            label="Laporan"
            pageKey="laporan"
            open={sidebarOpen}
            activePage={activePage}
            setPage={setActivePage}
          />
          <NavItem
            icon={<Settings size={20} />}
            label="Pengaturan"
            pageKey="pengaturan"
            open={sidebarOpen}
            activePage={activePage}
            setPage={setActivePage}
          />
        </nav>

        {/* Tombol Keluar */}
        <div className="border-t p-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-2 rounded-lg w-full transition"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Keluar</span>}
          </button>
        </div>
      </aside>

      {/* Konten utama - Menggunakan Conditional Rendering */}
      <main className="flex-1 p-8">{renderContent()}</main>
    </div>
  );
}
