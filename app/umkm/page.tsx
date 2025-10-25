'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, ArrowLeft } from 'lucide-react';

interface ProductFormData {
  name: string;
  description: string;
  image: File | null;
  video: string;
  price: string;
}

export default function TambahUMKMPage() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    image: null,
    video: '',
    price: '',
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // 🔹 Handle input teks & angka
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle input file
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const priceValue = parseFloat(formData.price);
    if (isNaN(priceValue)) {
      setError('Harga harus berupa angka yang valid.');
      setIsLoading(false);
      return;
    }

    try {
      // 🔹 Siapkan data form (termasuk file)
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('video', formData.video);
      data.append('price', priceValue.toString());
      if (formData.image) data.append('image', formData.image);

      const response = await fetch('/api/products', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Pendaftaran produk gagal.');
      }

      alert('Produk UMKM berhasil didaftarkan!');
      router.push('/umkm');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
      <div
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-500 ease-in-out hover:shadow-3xl"
        data-aos="fade-up"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Kembali</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-blue-800 tracking-tight">
            Daftar Produk UMKM
          </h2>
        </div>

        {/* Error Alert */}
        {error && (
          <div
            className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg"
            role="alert"
          >
            <p className="font-bold">Gagal!</p>
            <p>{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Produk */}
          <div className="form-group">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Nama Produk/UMKM
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Deskripsi */}
          <div className="form-group">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="description"
            >
              Deskripsi
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Upload Gambar Produk */}
<div className="form-group">
  <label
    htmlFor="image"
    className="block text-gray-700 font-semibold mb-3"
  >
    Gambar Produk
  </label>

  <div
    className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 cursor-pointer"
    onClick={() => document.getElementById('image')?.click()}
  >
    {preview ? (
      <img
        src={preview}
        alt="Preview"
        className="w-48 h-48 object-cover rounded-lg border shadow-md"
      />
    ) : (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-400 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 16l4-4a3 3 0 014 0l4 4m-2-2l2-2a3 3 0 014 0l4 4M4 4h16v16H4z"
          />
        </svg>
        <p className="text-gray-600 font-medium">
          Klik untuk memilih gambar
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Format: JPG, PNG, GIF (maks 5MB)
        </p>
      </>
    )}

    <input
      type="file"
      name="image"
      id="image"
      accept="image/*"
      onChange={handleFileChange}
      className="hidden"
      required
    />
  </div>

  {preview && (
    <p className="text-center text-sm text-gray-500 mt-2 italic">
      Gambar berhasil dipilih
    </p>
  )}
</div>


          {/* URL Video */}
          <div className="form-group">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="video"
            >
              URL Video Produk
            </label>
            <input
              type="url"
              name="video"
              id="video"
              value={formData.video}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Harga */}
          <div className="form-group">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="price"
            >
              Range Harga (Rp)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              required
              step="0.01"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Tombol Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl w-full flex items-center justify-center gap-2 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Memproses...
                </>
              ) : (
                'Daftarkan Produk UMKM'
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
