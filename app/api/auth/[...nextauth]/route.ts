import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      
      // INI CONTOH PALSU
      async authorize(credentials) {
        
        if (credentials?.email === "admin@example.com" && credentials.password === "password123") {
          
          return { id: "1", name: "Admin", email: "admin@example.com" }
        }
        
        
        return null
      }
    })
  ],
  pages: {
    signIn: '/login', // Arahkan ke halaman login kustommu di app/login
  },
  secret: process.env.NEXTAUTH_SECRET, // Ambil secret dari .env
})

export { handler as GET, handler as POST }