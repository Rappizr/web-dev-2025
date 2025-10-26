"use client";

// --- Impor ---
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link"; // Pastikan Link diimpor
import {
  Menu, LogOut, Home, Package, Users, BarChart3, Settings,
  MoreVertical, Search, PlusCircle, Loader2 // Tambahkan Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table, TableHeader, TableHead, TableRow, TableCell, TableBody,
} from "@/components/ui/table";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

// ===========================================
// 🔹 DATA PALSU (Untuk Pengguna, Laporan)
// ===========================================
const dummyUsers = [
  { id: "u1", name: "Admin Utama", email: "admin@example.com", role: "Admin" },
  { id: "u2", name: "Budi (UMKM)", email: "budi@umkm.com", role: "User" },
  { id: "u3", name: "Siti (UMKM)", email: "siti@umkm.com", role: "User" },
];

const dummyChartData = [
  { name: "Kuliner", Total: 4500000 },
  { name: "Fashion", Total: 3200000 },
  { name: "Souvenir", Total: 1800000 },
];

// ===========================================
// 🔹 KOMPONEN KONTEN YANG DIPERBARUI
// ===========================================

// --- Halaman Produk (Mengambil Data Asli) ---
function ProdukContent() {
  const [products, setProducts] = useState<any[]>([]); // Ganti any dengan tipe Product jika ada
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error(`Gagal memuat data: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err: any) {
      console.error("Error fetching products:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId: number) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    try {
      // TODO: Buat API DELETE di /api/products/[id]
      // const response = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
      // if (!response.ok) throw new Error('Gagal menghapus');
      alert(`(Simulasi) Produk ID ${productId} dihapus.`);
      fetchProducts(); // Refresh data
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin text-blue-600" size={40} />
        <span className="ml-3 text-gray-600">Memuat data produk...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 bg-red-50 p-6 rounded-lg">
        Terjadi Kesalahan: {error}
        <Button onClick={fetchProducts} variant="outline" size="sm" className="ml-4">Coba Lagi</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Package size={30} /> Manajemen Produk ({products.length})
        </h2>
        <Button asChild className="flex items-center gap-2">
          <Link href="/umkm"> {/* Pastikan link ini benar */}
            <PlusCircle size={20} /> Tambah Produk
          </Link>
        </Button>
      </div>
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input placeholder="Cari produk..." className="pl-10" />
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-100">
              <TableHead className="w-[80px]">Gambar</TableHead>
              <TableHead>Nama Produk</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Lokasi</TableHead>
              <TableHead className="text-right w-[50px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 py-10">
                  Belum ada produk. Silakan tambahkan produk baru.
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50">
                  <TableCell>
                    {product.image ? (
                       <Image
                         src={product.image}
                         alt={product.name}
                         width={60} height={60}
                         className="rounded object-cover aspect-square border"
                       />
                    ) : (
                      <div className="w-[60px] h-[60px] bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400 border">No Img</div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    {product.category.charAt(0) + product.category.slice(1).toLowerCase()}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(product.price)}
                  </TableCell>
                  <TableCell>{product.lokasi || '-'}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><MoreVertical size={20} /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 focus:bg-red-50 focus:text-red-600" onClick={() => handleDelete(product.id)}>Hapus</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// --- Halaman Pengguna (UI Diperbarui, Data Palsu) ---
function PenggunaContent() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Users size={30} /> Manajemen Pengguna ({dummyUsers.length})
        </h2>
        <Button className="flex items-center gap-2">
          <PlusCircle size={20} /> Tambah Pengguna
        </Button>
      </div>
      {/* TODO: Tambahkan API & Fetch Data Pengguna */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-100">
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Peran</TableHead>
              <TableHead className="text-right w-[50px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyUsers.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === "Admin" ? "destructive" : "secondary"}>{user.role}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical size={20} /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Peran</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500 focus:bg-red-50 focus:text-red-600">Hapus</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
       <p className="mt-4 text-sm text-gray-500">Data pengguna masih menggunakan data palsu. API belum dibuat.</p>
    </div>
  );
}

// --- Halaman Laporan (UI Diperbarui, Data Palsu) ---
function LaporanContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <BarChart3 size={30} /> Laporan & Analitik
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <StatCard title="Total Penjualan (Bulan Ini)" value="Rp 9.500.000" icon={<BarChart3 size={20} />} />
        <StatCard title="Produk Terjual" value="432" icon={<Package size={20} />} />
        <StatCard title="User Baru" value="12" icon={<Users size={20} />} />
      </div>
      {/* TODO: Tambahkan API & Fetch Data Laporan */}
      <Card>
        <CardHeader><CardTitle>Penjualan per Kategori (Bulan Ini)</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `Rp ${new Intl.NumberFormat("id-ID").format(value)}`} />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(value)} />
                <Legend />
                <Bar dataKey="Total" fill="#3b82f6" name="Total Penjualan"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <p className="mt-4 text-sm text-gray-500">Data laporan masih menggunakan data palsu. API belum dibuat.</p>
    </div>
  );
}

// --- Halaman Pengaturan (UI Diperbarui) ---
function PengaturanContent() {
  // TODO: Tambahkan state & handler untuk simpan
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Settings size={30} /> Pengaturan Sistem
      </h2>
      <Card>
        <CardHeader><CardTitle>Konfigurasi Umum</CardTitle></CardHeader>
        <CardContent className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Label htmlFor="nama-web">Nama Website</Label>
            <Input id="nama-web" defaultValue="UMK Malang" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-admin">Email Admin Utama</Label>
            <Input id="email-admin" type="email" defaultValue="admin@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maintenance-msg">Pesan Maintenance</Label>
            <Input id="maintenance-msg" defaultValue="Situs sedang dalam perbaikan." />
          </div>
          <div className="flex justify-end pt-4">
            <Button>Simpan Perubahan</Button> {/* TODO: Tambahkan onClick handler */}
          </div>
        </CardContent>
      </Card>
       <p className="mt-4 text-sm text-gray-500">Fungsi simpan belum terhubung ke API.</p>
    </div>
  );
}

// --- Komponen StatCard (Tidak Berubah) ---
// ... (Kode StatCard tetap sama) ...
function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode; }) {
 return ( <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition"> <div> <p className="text-gray-500 text-sm font-medium">{title}</p> <h4 className="text-2xl font-bold text-gray-800 mt-1">{value}</h4> </div> <div className="p-3 bg-blue-100 text-blue-600 rounded-full">{icon}</div> </div> );
}

// --- Komponen NavItem (Tidak Berubah) ---
// ... (Kode NavItem tetap sama) ...
function NavItem({ icon, label, open, pageKey, activePage, setPage, }: { icon: React.ReactNode; label: string; open: boolean; pageKey: string; activePage: string; setPage: (key: string) => void; }) { const active = activePage === pageKey; return ( <button onClick={() => setPage(pageKey)} className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-200 ${ active ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100 text-gray-700" }`} > {icon} {open && <span className="truncate">{label}</span>} </button> );}

// ===========================================
// 🚀 KOMPONEN UTAMA ADMIN (Dengan Keamanan & Perbaikan)
// ===========================================
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard"); // Default ke dashboard
  const router = useRouter();
  const { data: session, status } = useSession();

  // --- Keamanan Halaman ---
  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') router.push('/login');
  }, [status, router]);

  // --- Fungsi Logout ---
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  // --- Tampilan Loading Sesi ---
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin text-blue-600 mr-3" size={30}/> Memeriksa sesi admin...
      </div>
    );
  }
  if (status === 'unauthenticated') return null; // Akan diarahkan oleh useEffect

  // --- Render Konten Dinamis ---
  const renderContent = () => {
    switch (activePage) {
      case "produk": return <ProdukContent />;
      case "pengguna": return <PenggunaContent />;
      case "laporan": return <LaporanContent />;
      case "pengaturan": return <PengaturanContent />;
      case "dashboard":
      default:
        // --- Konten Dashboard Default ---
        return (
          <>
            <header className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Dashboard Admin</h2>
              <div className="flex items-center gap-3 bg-white shadow-md px-4 py-2 rounded-xl">
                <Image
                  src={session?.user?.image || "https://i.pravatar.cc/40"} // Gunakan gambar user jika ada
                  alt={session?.user?.name || "Admin"}
                  width={40} height={40}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold text-gray-700">{session?.user?.name || "Admin UMKM"}</p>
                  <p className="text-xs text-gray-400">{session?.user?.email || "Email tidak tersedia"}</p>
                </div>
              </div>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard title="Total UMKM" value="-" icon={<Package size={20} />} /> {/* Ganti value jika ada API */}
              <StatCard title="Pengguna Aktif" value="-" icon={<Users size={20} />} /> {/* Ganti value jika ada API */}
              <StatCard title="Penjualan Bulan Ini" value="-" icon={<BarChart3 size={20} />} /> {/* Ganti value jika ada API */}
            </section>
            <section className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Ringkasan Aktivitas</h3>
              {/* TODO: Tambahkan ringkasan atau tabel lain di sini */}
              <p className="text-gray-500">Grafik atau data ringkasan akan muncul di sini.</p>
            </section>
          </>
        );
    }
  };

  // --- Render JSX Utama ---
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className={`${ sidebarOpen ? "w-64" : "w-20" } bg-white shadow-xl flex flex-col transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`text-xl font-bold text-blue-600 transition-opacity duration-300 ${ sidebarOpen ? "opacity-100" : "opacity-0 hidden" }`}>Admin Panel</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-200 rounded-lg" aria-label="Toggle Sidebar" title="Toggle Sidebar">
            <Menu size={22} />
          </button>
        </div>
        <nav className="flex-1 mt-4 space-y-1 overflow-y-auto">
          <NavItem icon={<Home size={20} />} label="Dashboard" pageKey="dashboard" open={sidebarOpen} activePage={activePage} setPage={setActivePage} />
          <NavItem icon={<Package size={20} />} label="Produk" pageKey="produk" open={sidebarOpen} activePage={activePage} setPage={setActivePage} />
          <NavItem icon={<Users size={20} />} label="Pengguna" pageKey="pengguna" open={sidebarOpen} activePage={activePage} setPage={setActivePage} />
          <NavItem icon={<BarChart3 size={20} />} label="Laporan" pageKey="laporan" open={sidebarOpen} activePage={activePage} setPage={setActivePage} />
          <NavItem icon={<Settings size={20} />} label="Pengaturan" pageKey="pengaturan" open={sidebarOpen} activePage={activePage} setPage={setActivePage} />
        </nav>
        <div className="border-t p-4">
          <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-2 rounded-lg w-full transition">
            <LogOut size={20} />
            {sidebarOpen && <span>Keluar</span>}
          </button>
        </div>
      </aside>
      {/* Konten Utama */}
      <main className="flex-1 p-8 overflow-auto">{renderContent()}</main>
    </div>
  );
}