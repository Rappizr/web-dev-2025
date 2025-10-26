import { PrismaClient, Category } from "../../../generated/prisma";
import { NextResponse, NextRequest } from "next/server";
import { writeFile } from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();


export async function POST(request: NextRequest) {
  try {
    
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const videoUrl = formData.get("video") as string | null; 
    const priceString = formData.get("price") as string;
    const categoryString = formData.get("category") as string;
    const lokasi = formData.get("lokasi") as string | null; 
    const imageFile = formData.get("image") as File | null;

    
    if (!name || !description || !priceString || !categoryString || !imageFile) {
      return NextResponse.json({ error: "Data wajib (nama, deskripsi, harga, kategori, gambar) tidak boleh kosong." }, { status: 400 });
    }

    
    const price = parseInt(priceString, 10);
    if (isNaN(price)) {
      return NextResponse.json({ error: "Harga harus berupa angka." }, { status: 400 });
    }

    
    const category = categoryString.toUpperCase() as Category; 
    if (!Object.values(Category).includes(category)) {
       return NextResponse.json({ error: "Kategori produk tidak valid." }, { status: 400 });
    }

    
    
    let imageUrl = null; 
    if (imageFile) {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        
        const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
        
        const imagePath = path.join(process.cwd(), 'public', 'uploads', filename);

        
        await writeFile(imagePath, buffer);
        console.log(`Gambar disimpan di: ${imagePath}`);

        
        imageUrl = `/uploads/${filename}`; 
    }

    
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        description: description,
        image: imageUrl, 
        video: videoUrl,   
        price: price,      
        category: category,  
        lokasi: lokasi,    
      },
    });

    
    return NextResponse.json(newProduct, { status: 201 }); 

  } catch (error) {
    
    console.error("Gagal membuat produk:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menyimpan data produk." },
      { status: 500 } 
    );
  }
}






export async function GET() {
  try {
    
    const products = await prisma.product.findMany({
      orderBy: {
        
        
        id: 'desc', 
      },
    });

    
    return NextResponse.json(products);

  } catch (error) {
    
    console.error("Gagal mengambil daftar produk:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data produk." },
      { status: 500 } 
    );
  }
}
