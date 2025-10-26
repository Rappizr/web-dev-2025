"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'; // Impor Image
import { Loader2, ArrowLeft } from "lucide-react";

enum ProductCategory {
  KULINER = "KULINER",
  SOUVENIR = "SOUVENIR",
  FASHION = "FASHION",
}

interface ProductFormData {
  name: string;
  description: string;
  image: File | null;
  video: string;
  price: string;
  category: ProductCategory | "";
  lokasi: string;
}

export default function TambahUMKMPage() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    image: null,
    video: "",
    price: "",
    category: "",
    lokasi: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, category: e.target.value as ProductCategory }));
  };


  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));

    // Hapus preview lama jika ada
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // --- 1. VALIDASI LOKAL ---
    // Cek apakah harga bisa diubah menjadi integer
    const priceInt = parseInt(formData.price, 10);
    
    // Validasi utama
    if (isNaN(priceInt)) {
      setError("Harga harus berupa angka integer yang valid.");
      setIsLoading(false);
      return;
    }
    if (!formData.category) {
        setError("Silakan pilih kategori produk.");
        setIsLoading(false);
        return;
    }
    if (!formData.image) {
        setError("Silakan pilih gambar produk.");
        setIsLoading(false);
        return;
    }
    // ----------------------------


    try {
      // --- 2. SIAPKAN DATA & KIRIM ---
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("video", formData.video);
      data.append("price", priceInt.toString()); // Gunakan priceInt
      if (formData.image) data.append("image", formData.image);
      data.append("category", formData.category);
      data.append("lokasi", formData.lokasi);

      const response = await fetch("/api/products", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Pendaftaran produk gagal. Coba lagi.");
      }

      // --- 3. SUKSES & REDIRECT ---
      alert("Produk UMKM berhasil didaftarkan!");
      router.push("/admin?tab=produk");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Kembali</span>
          </Link>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800 tracking-tight text-center flex-1 mr-[calc(18px+0.5rem)]">
            Daftar Produk UMKM
          </h2>
        </div>

        {error && (
          <div
            className="bg-red-50 border border-red-200 text-red-800 p-4 mb-6 rounded-lg text-sm"
            role="alert"
          >
            <p className="font-semibold mb-1">Terjadi Kesalahan!</p>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label
              className="block text-sm text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Nama Produk/UMKM <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-150 text-sm"
              placeholder="Contoh: Batik Tulis Halus"
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm text-gray-700 font-medium mb-2"
              htmlFor="description"
            >
              Deskripsi <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-150 text-sm resize-none"
              placeholder="Jelaskan keunikan produk Anda..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="form-group">
              <label
                className="block text-sm text-gray-700 font-medium mb-2"
                htmlFor="category"
              >
                Kategori Produk <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleCategoryChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-150 text-sm bg-white appearance-none"
              >
                <option value="" disabled>
                  Pilih kategori...
                </option>
                {Object.values(ProductCategory).map((catValue) => (
                  <option key={catValue} value={catValue}>
                    {catValue.charAt(0) + catValue.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </div>

             <div className="form-group">
              <label
                className="block text-sm text-gray-700 font-medium mb-2"
                htmlFor="lokasi"
              >
                Lokasi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lokasi"
                id="lokasi"
                value={formData.lokasi}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-150 text-sm"
                placeholder="Contoh: Lowokwaru, Malang"
              />
            </div>
          </div>


          <div className="form-group">
            <label
              htmlFor="image"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Gambar Produk <span className="text-red-500">*</span>
            </label>
            <div
              className="relative flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 cursor-pointer group"
              onClick={() => document.getElementById("image")?.click()}
              tabIndex={0} // Make it focusable
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('image')?.click(); }} // Keyboard accessibility
            >
              <input
                type="file"
                name="image"
                id="image"
                accept="image/jpeg, image/png, image/gif, image/webp"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              {preview ? (
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                   <Image
                      src={preview}
                      alt="Pratinjau Gambar Produk"
                      fill // Gunakan fill untuk aspect ratio
                      style={{ objectFit: 'cover' }} // Pastikan gambar terisi
                      className="rounded-lg border shadow-sm"
                      sizes="(max-width: 640px) 160px, 192px" // Ukuran responsif
                    />
                </div>

              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400 group-hover:text-blue-500 mb-3 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className="text-sm text-gray-600 group-hover:text-blue-600 font-medium transition-colors">
                    Klik atau jatuhkan gambar di sini
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG, GIF, WEBP (maks 5MB)
                  </p>
                </>
              )}
            </div>
             {preview && (
              <button
                 type="button"
                 onClick={() => {
                   setFormData((prev) => ({ ...prev, image: null }));
                   if (preview) URL.revokeObjectURL(preview);
                   setPreview(null);
                   const fileInput = document.getElementById('image') as HTMLInputElement;
                   if (fileInput) fileInput.value = ''; // Reset input file
                 }}
                 className="text-xs text-red-500 hover:text-red-700 mt-2 underline"
               >
                 Hapus gambar
               </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label
                className="block text-sm text-gray-700 font-medium mb-2"
                htmlFor="video"
              >
                URL Video Produk <span className="text-gray-400 text-xs">(Opsional)</span>
              </label>
              <input
                type="url"
                name="video"
                id="video"
                value={formData.video}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-150 text-sm"
                placeholder="https://youtube.com/..."
              />
            </div>

            <div className="form-group">
              <label
                className="block text-sm text-gray-700 font-medium mb-2"
                htmlFor="price"
              >
                Harga (Rp) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="1000"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-150 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" // Hide spinner
                placeholder="Contoh: 50000"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full flex items-center justify-center gap-2 transition-colors duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed shadow hover:shadow-md text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Memproses Pendaftaran...
                </>
              ) : (
                "Daftarkan Produk UMKM"
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}