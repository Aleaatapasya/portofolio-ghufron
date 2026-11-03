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

export interface PartTimeExperience {
  id: number;
  company: string;
  role: string;
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
    year: "2026",
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
      image: "/images/org_1.jpeg",
    },
    {
      id: 2,
      role: "Staff Divisi Futsal",
      organization: "KBAA",
      period: "April 2023 – April 2024",
      description: "Mendukung pelaksanaan latihan futsal serta menganalisis kemampuan dan daya saing 27 atlet untuk menunjang pengembangan kemampuan tim.",
      image: "/images/org_2.jpeg",
    },
    {
      id: 3,
      role: "Ketua Divisi Logistik",
      organization: "KBAA Championship",
      period: "Oktober 2023 – Desember 2023",
      description: "Memimpin delapan anggota divisi dalam mempersiapkan kebutuhan logistik, memastikan ketersediaan perlengkapan, dan mendukung keamanan selama acara berlangsung.",
      image: "/images/org_3.jpeg",
    },
    {
      id: 4,
      role: "Staff Liaison Officer",
      organization: "Kaderisasi Jurusan",
      period: "Agustus 2023 – Oktober 2023",
      description: "Menjadi penghubung antara panitia dan mahasiswa baru, mengelola absensi, serta mendampingi 21 mahasiswa selama kegiatan orientasi universitas.",
      image: "/images/org_4.jpeg",
    },
    {
      id: 5,
      role: "Staff Liaison Officer",
      organization: "PKKMB Universitas Telkom",
      // Retained exactly as written in the source document as mandated
      period: "Agustus 2023 – Juli 2023",
      description: "Menjadi penghubung antara panitia dan mahasiswa baru, mengelola absensi, serta mendampingi 21 mahasiswa selama kegiatan orientasi universitas.",
      image: "/images/org_5.jpeg",
    },
  ],
  internships: [
    {
      id: 1,
      company: "PT Telkom Indonesia",
      division: "Digital Connectivity Service",
      period: "Juli 2024 – September 2024",
      responsibilities: [
        "Mendukung pengembangan dan pemantauan layanan infrastruktur digital bagi pelanggan korporasi.",
        "Melakukan evaluasi kinerja layanan Digital Connectivity Service untuk mendukung efektivitas operasional perusahaan.",
        "Menganalisis kebutuhan pelanggan sebagai dasar dalam mengidentifikasi solusi konektivitas yang sesuai.",
        "Berkoordinasi dengan tim internal untuk mendukung kelancaran implementasi layanan dan pemenuhan kebutuhan pelanggan.",
      ],
      image: "/images/internship_1.jpeg",
    },
    {
      id: 2,
      company: "PT Telkom Indonesia",
      division: "Bidding Transaction Support",
      period: "Juni 2025 – Agustus 2025",
      responsibilities: [
        "Melakukan analisis laporan keuangan pelanggan menggunakan Microsoft Excel untuk memperoleh gambaran kondisi finansial perusahaan.",
        "Mengolah data keuangan dan menghitung rasio keuangan sebagai dasar evaluasi kelayakan finansial pelanggan.",
        "Memvisualisasikan hasil analisis dalam bentuk tabel dan diagram untuk menyajikan informasi keuangan secara jelas dan sistematis.",
        "Menyusun hasil analisis keuangan secara terstruktur sebagai bahan pendukung evaluasi bisnis dan pengambilan keputusan perusahaan.",
      ],
      image: "/images/internship_3.jpeg",
    },
  ],
  partTime: {
    id: 1,
    company: "Space Basketball",
    role: "Coach Basketball",
    period: "Juni 2023 – April 2024",
    responsibilities: [
      "Membimbing anak-anak dalam mempelajari teknik dasar olahraga basket melalui latihan yang terarah dan sesuai dengan tahap perkembangan mereka.",
      "Mengembangkan koordinasi gerak, keterampilan motorik, serta kemampuan dasar bermain basket melalui aktivitas latihan yang interaktif.",
      "Menciptakan suasana latihan yang positif untuk mendorong kedisiplinan, kepercayaan diri, dan kerja sama anak.",
    ],
    images: ["/images/basketball_1.jpeg", "/images/basketball_2.jpeg"],
  },
  certificates: [
    {
      id: 1,
      title: "Microsoft Excel Mastery for Finance - Certificate of Completion",
      issuer: "SmartPath (International Webinar)",
      image: "/images/cert_p9_1.png",
    },
    {
      id: 2,
      title: "Business Analytics with Excel - Declaration of Completion",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p9_2.png",
    },
    {
      id: 3,
      title: "Data Analyst 101 - Declaration of Completion",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p9_3.png",
    },
    {
      id: 4,
      title: "Excel Dashboard for Beginners - Declaration of Completion",
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
      title: "Menjadi Ahli Data Analytics Dengan Power BI",
      issuer: "Udemy",
      image: "/images/cert_p9_6.jpeg",
    },
    {
      id: 7,
      title: "Sertifikat Praktik Kerja Lapangan Bidding & Transaction Support",
      issuer: "PT Telkom Indonesia (Persero) Tbk",
      image: "/images/cert_p9_7.jpeg",
    },
    {
      id: 8,
      title: "Sertifikat Kompetensi - Data Management (Data Analyst)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP Global",
      image: "/images/cert_p9_8.jpeg",
    },
    {
      id: 9,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Social Influence",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_1.png",
    },
    {
      id: 10,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Digital Disruption & Transformation",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_2.png",
    },
    {
      id: 11,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Emotional Intelligence",
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
      title: "Sertifikat Pembekalan 12+ Essential Skills - Digital Literacy",
      issuer: "GNIK & Maganghub Kemnaker RI",
      image: "/images/cert_p10_5.png",
    },
    {
      id: 14,
      title: "Introduction to MS Excel - Declaration of Completion",
      issuer: "Simplilearn | SkillUp",
      image: "/images/cert_p10_6.png",
    },
    {
      id: 15,
      title: "Sertifikat Pembekalan 12+ Essential Skills - Integrity at Work",
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

