import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
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
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
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
