'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-primary">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/images/tech-category-image.jpg")' }}></div>

      <div className="relative w-full max-w-md p-8 bg-white/30 backdrop-blur-lg shadow-xl rounded-xl z-10">
        <div className="text-center mb-8">
          <img src="/logo.svg" alt="UMKM Logo" className="w-20 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Selamat Datang</h2>
          <p className="text-lg text-white/80 mt-2">Kenali UMKM lebih dekat disini</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Input Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 bg-white/40 backdrop-blur-lg text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan email"
            />
          </div>

          {/* Input Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-4 bg-white/40 backdrop-blur-lg text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Masukkan kata sandi"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-white" /> : <Eye className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-white/80">
            Belum punya akun?{' '}
            <a href="/register" className="text-white hover:text-primary">
              Daftar
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
