import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Pendahuluan",
    href: "/pendahuluan",
    heading: "Getting started",
    items: [
      {
        title: "Despkripsi Projek",
        href: "/deksripsi"
      },
      {
        title: "Teknologi Yang Digunakan",
        href: "/teknologi_digunakan",
      },
      {
        title: "Keterkaitan Mata Kuliah",
        href: "/keterkaitan"
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Analisis Dan Desain Perangkat Lunak",
    href: "/analisis",
    items: [
      {
       title: "Analisis Kebutuhan",
       href: "/kebutuhan",
       items: [
        {
         title: "Business Requirement",
         href: "/busines",
        },
        {
          title: "Stakeholder Requirement",
          href: "/stakeholder",
         },
         {
          title: "System Requirement",
          href: "/system",
         },
         {
          title: "Software Requirement",
          href: "/software",
         },
      ]
      },
      {
        title: "Diagram",
        href: "/Diagram",
        items: [
          {
            title: "Usecase Diagram",
            href: "/usecase",
           },
           {
             title: "Class Diagram",
             href: "/class",
            },
            {
             title: "Flowchart",
             href: "/flowchart",
            },
        ]
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Perancangan dan Antarmuka",
    href: "/perancangan",
    items: [
      {
        title: "Dokumen Desain",
        href: "/Desain",
        items:[
          {
            title: "Sketsa Awal",
            href: "/sketsa",
          },
          {
            title: "Wireframe",
            href: "/wireframe",
          },
          {
            title: "Prototype",
            href: "/prototype",
          }
        ]
      },
      {
        title: "Implementasi Desain",
        href: "/implementasi",
        items: [
          {
            title: "Kode HTML,CSS,JAVASCRIPT",
            href: "/kode"
          }
        ]
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Pengembangan Aplikasi",
    href: "/pengembangan",
    items: [
      {
        title: "Fitur Utama",
        href: "/fitur_utama",
        items:[
          {
            title: "Operasi CRUD",
            href: "/operasi_crud",
          },
          {
            title: "Fitur Login dan Registrasi",
            href: "/fitur_login",
          },
          {
            title: "Fitur Interaktif",
            href: "/fitur_interaktif",
          }
        ]
      },
      {
        title: "Struktur Basis Data",
        href: "/struktur_basis",
        items: [
          {
            title: "MySQL",
            href: "/mysql"
          }
        ]
      },
      {
        title: "Metode SDLC",
        href: "/metode_sdlc",
        items: [
          {
            title: "Analisis Kebutuhan",
            href: "/analisis_kebutuhan",
          },
          {
            title: "Pembuatan Diagram UML",
            href: "/pembuatan_diagram",
          },
          {
            title: "Pengembangan Kode dan Basis Data",
            href: "/pengembangan_kode",
          },
          {
            title: "Pengujian Fungsionalitas",
            href: "/pengujian_fungsionalitas",
          },
          {
            title: "Deployment ke Vercel",
            href: "/deployment"
          }
        ]
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Dokumentasi Penggunaan Website",
    href: "/dokumentasi_pengguna",
    items: [
      {
        title: "Panduan Penggunaan Website",
        href: "/panduan_pengguna"
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Metode Pengembangan Perangkat Lunak",
    href: "/metode_pengembangan",
    items: [
      {
        title: "Penjelasan Metode Yang digunakan",
        href: "/penjelasan_metode",
      },
      {
        title: "Alasan Memilih Metode Yang Digunakan",
        href: "/alasan_memilih",
      },
      {
        title: "Implementasi Setiap Tahapan",
        href: "/implementasi"
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Kesimpulan Dan Saran",
    href: "/kesimpulan",
    items: [
      {
        title: "Evaluasi Projek",
        href: "/evaluasi",
      },
      {
        title: "Rekomendasi Pengembangan Selanjutnya",
        href: "/rekomendasi"
      }
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
]
