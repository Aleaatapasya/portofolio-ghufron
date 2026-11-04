export interface SkillItem {
  name: string;
  category: 'hard' | 'soft';
  description?: string;
  icon?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  gpa: string;
}

export interface OrganizationExperience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  image?: string;
}

export interface InternshipExperience {
  id: number;
  company: string;
  division: string;
  period: string;
  responsibilities: string[];
  image?: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer?: string;
  image: string;
}

export const portfolioData = {
  hero: {
    badge: "PORTOFOLIO",
    name: "Muhammad Ghufron",
    nameAccent: "Arrozzaq",
    profession: "FINANCE & ADMINISTRATION",
  },
  about: {
    greeting: "Halo, saya",
    fullName: "Muhammad Ghufron Arrozzaq",
    bio: "Saya Muhammad Ghufron Arrozzaq, lulusan Administrasi Bisnis dari Telkom University dengan IPK 3,83. Memiliki ketertarikan pada bidang Business Development, Business Operations, Finance, dan Project Management. Memiliki pengalaman magang di PT Telkom Indonesia dalam analisis laporan keuangan, pengolahan data menggunakan Microsoft Excel, serta mendukung proses bisnis perusahaan. Berkomitmen untuk terus berkembang dan memberikan kontribusi positif bagi perusahaan.",
    education: {
      degree: "S1 Administrasi Bisnis",
      institution: "Telkom University",
      gpa: "3,83",
    },
    photo: "/images/ghufron_formal.jpeg",
  },
  skills: {
    hard: [
      {
        name: "Microsoft Excel",
        description: "Mengolah data, menggunakan rumus dasar, serta menyusun tabel dan laporan analisis.",
        icon: "excel",
      },
      {
        name: "Microsoft Word",
        description: "Menyusun dokumen dan laporan secara sistematis.",
        icon: "word",
      },
      {
        name: "Microsoft PowerPoint",
        description: "Menyusun presentasi untuk menyampaikan informasi secara terstruktur.",
        icon: "powerpoint",
      },
      {
        name: "Google Workspace",
        description: "Mengelola dokumen, mengolah data, dan menyusun presentasi secara efektif menggunakan Google Workspace.",
        icon: "google",
      },
      {
        name: "Canva",
        description: "Membuat desain presentasi dan materi visual untuk mendukung komunikasi informasi.",
        icon: "canva",
      },
      {
        name: "Financial Analysis",
        description: "Menganalisis laporan keuangan dan menghitung rasio keuangan untuk mengevaluasi kondisi finansial pelanggan.",
        icon: "financial",
      },
      {
        name: "Data Analysis",
        description: "Mengolah dan menginterpretasikan data sebagai bahan evaluasi dan pendukung pengambilan keputusan.",
        icon: "data",
      },
      {
        name: "Analytical Thinking",
        description: "Mampu menganalisis data dan informasi untuk mendukung evaluasi bisnis.",
        icon: "analytical",
      },
    ],
    soft: [
      { name: "Communication", icon: "message" },
      { name: "Teamwork & Collaboration", icon: "users" },
      { name: "Problem Solving", icon: "lightbulb" },
      { name: "Time Management", icon: "clock" },
      { name: "Adaptability", icon: "refresh" },
      { name: "Leadership", icon: "user-check" },
    ],
  },
  organizations: [
    {
      id: 1,
      role: "Staff Komisi 2",
      organization: "DPM KEMA FKS",
      period: "Maret 2024 – Januari 2025",
      description: "Bertanggung jawab dalam mengawasi dan mengevaluasi kinerja beberapa departemen BEM, termasuk Departemen Dalam Negeri, Luar Negeri, dan Pengembangan Sumber Daya Mahasiswa.",
      image: "/images/org_1.png",
    },
    {
      id: 2,
      role: "Staff Divisi Futsal",
      organization: "KBAA",
      period: "April 2023 – April 2024",
      description: "Mendukung pelaksanaan latihan futsal serta menganalisis kemampuan dan daya saing 27 atlet untuk menunjang pengembangan kemampuan tim.",
      image: "/images/org_2.png",
    },
    {
      id: 3,
      role: "Ketua Divisi Logistik",
      organization: "KBAA Championship",
      period: "Oktober 2023 – Desember 2023",
      description: "Memimpin delapan anggota divisi dalam mempersiapkan kebutuhan logistik, memastikan ketersediaan perlengkapan, dan mendukung keamanan selama acara berlangsung.",
      image: "/images/org_3.png",
    },
    {
      id: 4,
      role: "Staff Liaison Officer",
      organization: "Kaderisasi Jurusan",
      period: "Agustus 2023 – Oktober 2023",
      description: "Menjadi penghubung antara panitia dan mahasiswa baru, mengelola absensi, serta mendampingi 21 mahasiswa selama kegiatan orientasi universitas.",
      image: "/images/org_5.png",
    },
    {
      id: 5,
      role: "Staff Liaison Officer",
      organization: "PKKMB Universitas Telkom",
      period: "Agustus 2023 – Juli 2023",
      description: "Menjadi penghubung antara panitia dan mahasiswa baru, mengelola absensi, serta mendampingi 21 mahasiswa selama kegiatan orientasi universitas.",
      image: "/images/org_4.png",
    },
  ],
  internships: [

    {
      id: 1,
      company: "PT Telkom Indonesia",
      division: "Bidding Transaction Support",
      period: "Juni 2025 – Agustus 2025",
      responsibilities: [
        "Mendukung kegiatan Revenue Assurance pada layanan Badan Usaha Milik Negara (BUMN), termasuk administrasi transaksi dan dokumentasi.",
        "Mengolah dan memvalidasi data untuk memastikan keakuratan sebelum dimasukkan ke dalam laporan.",
        "Menganalisis data 530 pelanggan PT Telkom untuk menilai kemampuan pembayaran serta mendukung penyusunan laporan Revenue Assurance.",
        "Berkoordinasi dengan berbagai tim terkait untuk menindaklanjuti kebutuhan dokumen dan operasional.",
      ],
      image: "/images/internship_2.png",
    },
    {
      id: 2,
      company: "PT Telkom Indonesia",
      division: "Digital Connectivity Service",
      period: "Juli 2024 – September 2024",
      responsibilities: [
        "Mendukung pengembangan dan pemantauan layanan Enterprise Digital Connectivity, dengan fokus pada solusi infrastruktur digital bagi pelanggan korporasi.",
        "Mengolah dan mengorganisir data 20 produk konektivitas Enterprise, termasuk pengelompokan produk, konsolidasi informasi layanan, serta rekapitulasi data menggunakan Microsoft Excel.",
        "Membantu mengevaluasi kinerja layanan Digital Connectivity untuk mendukung efektivitas operasional dan kualitas layanan.",
        "Menganalisis informasi produk Enterprise untuk mengidentifikasi kebutuhan pelanggan dan mendukung penyediaan solusi konektivitas yang sesuai.",
        "Menyusun rangkuman dan laporan bulanan untuk mendukung pemantauan kinerja produk, evaluasi data, serta pengambilan keputusan operasional."
      ],
      image: "/images/internship_1.png",
    },
  ],
  certificates: [
    {
      id: 1,
      title: "Microsoft Excel Mastery for Finance",
      issuer: "SmartPath (International Webinar)",
      image: "/images/cert_p9_1.png",
    },
    {
      id: 2,
      title: "Business Analytics with Excel",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p9_2.png",
    },
    {
      id: 3,
      title: "Data Analyst 101",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p9_3.png",
    },
    {
      id: 4,
      title: "Excel Dashboard for Beginners",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p9_4.png",
    },
    {
      id: 5,
      title: "Sertifikat Partisipasi Dewan DPM KEMA FKS 2024-2025",
      issuer: "Telkom University",
      image: "/images/cert_p9_5.jpeg",
    },
    {
      id: 6,
      title: "Sertifikat Kompetensi - Data Management (Data Analyst)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP Global",
      image: "/images/cert_p9_6.jpeg",
    },
    {
      id: 7,
      title: "Menjadi Ahli Data Analytics Dengan Power BI",
      issuer: "Udemy",
      image: "/images/cert_p9_7.jpeg",
    },
    {
      id: 8,
      title: "Sertifikat Magang - Bidding & Transaction Support",
      issuer: "PT Telkom Indonesia (Persero) Tbk",
      image: "/images/cert_p9_8.png",
    },
    {
      id: 9,
      title: "Introduction Excel",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p10_1.png",
    },
    {
      id: 10,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Integrity at Work",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_2.png",
    },
    {
      id: 11,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Digital Literacy",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_3.png",
    },
    {
      id: 12,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Self Efficacy",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_4.png",
    },
    {
      id: 13,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Emotional Intelligence",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_5.png",
    },
    {
      id: 14,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Digital Disruption & Transformation",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_6.png",
    },
    {
      id: 15,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Social Influence",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_7.png",
    },
    {
      id: 16,
      title: "EPrT (English Proficiency Test) Certificate",
      issuer: "Telkom University Language Center",
      image: "/images/cert_p10_8.png",
    },
  ],
  contact: {
    email: "ghufronar50@gmail.com",
    phone: "0813-1785-8567",
    name: "Muhammad Ghufron Arrozzaq",
    username: "ghufron.ar",
  },
  footer: {
    heading: "THANK YOU FOR YOUR ATTENTION",
    name: "M Ghufron Arrozzaq",
  },
};
