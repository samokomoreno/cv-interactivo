
import type { ExperienceItem, SkillCategory, EducationItem, CourseItem, CareerDataPoint } from './types';
import { Briefcase, Code, Database, GitBranch, GraduationCap, HardDrive, ShieldCheck, Users } from 'lucide-react';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'FDL',
    logo: 'fdl_logo.png',
    period: '2023 – 2026 (Actualidad)',
    title: 'Analista Desarrollador Senior - Oracle Forms & Oracle DB',
    responsibilities: [
        'Desarrollo continuo y evolución de sistemas en Oracle (Forms 10g/12c y Reports).',
        'Diseño, optimización y mantenimiento de objetos de bases de datos Oracle (PL/SQL, Packages, Triggers, Vistas y Procedimientos).',
        'Seguimiento a todo el proceso de desarrollo de sistemas y administración de proyectos de software.',
        'Análisis técnico, estimación de requerimientos y preparación de planes de pase a producción.',
        'Mantenimiento y evolución de sistemas Core Financiero, Administrativo, PLD y Reportería Regulatoria.'
    ],
    achievements: [
        'Ganador del 1er lugar en el primer INNOVATON-FDL con el proyecto "Visor Estratégico".',
        'Extracción y elaboración de reportes de cumplimiento y regulatorios para entidades fiscalizadoras.',
        'Seguimiento y resolución continua de requerimientos y tickets de mantenimiento de sistemas Core (SAC, ICHI, ADM, Contab).'
    ],
    tags: ['Oracle Forms', 'Oracle DB', 'PL/SQL', 'Core Financiero', 'Análisis', 'Desarrollo']
  },
  {
    company: 'AirPak Nicaragua',
    logo: 'airpak_logo.png',
    period: '2021 – 2023',
    title: 'Líder de Desarrollo de Sistemas de Cumplimiento',
    responsibilities: [
      'Seguimiento del ciclo de vida de desarrollo y administración de proyectos de software.',
      'Análisis y estimación de proyectos con el método de Puntos de Función.',
      'Preparación de planes de implementación a producción.',
      'Seguimiento de proyectos utilizando Kanban, Agile y Scrum.'
    ],
    achievements: [
      'Lideré proyectos de cambios en sistemas de Cumplimiento a nivel regional (Centroamérica y México).',
      'Implementé la migración del servicio ControlServices de WCF a microservicios API Rest Full con .NET Core 6 y contenedores AWS.',
      'Coordiné equipos de desarrolladores en los proyectos asignados.',
      'Participé como Arquitecto en el equipo Scrum para el proyecto de Billetera Electrónica de El Salvador.'
    ],
    tags: ['Gestión', 'Liderazgo', 'Arquitectura', 'API Rest', '.NET Core', 'AWS']
  },
  {
    company: 'Pinturas Sur',
    logo: 'sur_logo.png',
    period: '2015 – 2021',
    title: 'Jefe de TI',
    responsibilities: [
      'Creación de planes de mantenimiento para equipos de cómputo.',
      'Gestión del inventario y adquisición de nueva tecnología.',
      'Asegurar la operación continua de los sistemas y redes de la empresa.',
      'Creación e implementación de políticas de uso de TIC.',
      'Soporte técnico remoto y presencial a todas las áreas.'
    ],
    achievements: [
      'Supervisé, analicé e implementé un sistema de control de activos con Apache, MySQL, PHP y Laravel.',
      'Diseñé y creé un Datawarehouse en SQL Server para unificar datos de ventas, visualizado con Power BI y Power Pivot.',
      'Implementé y administré una planta telefónica IP híbrida Grandstream (basada en Asterisk).',
      'Instalé y administré servidores Windows Server 2012.'
    ],
    tags: ['Gestión', 'Infraestructura', 'Soporte', 'PHP', 'Laravel', 'Power BI']
  },
  {
    company: 'MIFIC',
    logo: 'mific_logo.png',
    period: '2011 – 2015',
    title: 'Analista de Sistemas',
    responsibilities: [
      'Análisis de Sistemas y diseño en herramientas CASE.',
      'Modelado de Procesos de Negocio (BPM).',
      'Liderazgo del equipo de desarrollo.',
      'Seguimiento de proyectos informáticos contratados a terceros.'
    ],
    achievements: [
      'Mantenimiento al Sistema de Marcas, Patentes y Derechos de Autor (RPI).',
      'Desarrollo de una aplicación para el seguimiento de programas y proyectos.',
      'Seguimiento técnico a proyectos clave como Ventanilla Única de Inversiones (VUI) y Ventanilla Única de Comercio Exterior (VUCEN).',
      'Participación en la Mesa de Infraestructura del Gobierno Electrónico de Nicaragua.'
    ],
    tags: ['Análisis', 'Desarrollo', 'SharePoint', '.NET', 'Gestión']
  },
  {
    company: 'Lotería Nacional',
    logo: 'loteria_logo.png',
    period: '2008 – 2011',
    title: 'Jefe de Soporte Técnico',
    responsibilities: [
      'Encargado del área de soporte técnico, servidores y redes para todas las sucursales.',
      'Administrador de la página web institucional.',
      'Planificación del mantenimiento de PCs y redes.',
      'Instalación, configuración y administración de servidores Windows y Linux.'
    ],
    achievements: [
      'Instalación y configuración de Servidor de Correo MDaemon.',
      'Implementación del gestor de contenido web CMS Typo3.',
      'Implementación de firewall de red UNTANGLE (basado en Linux).',
      'Implementación de software de comunicación regional SPARK-OPENFIRE.'
    ],
    tags: ['Soporte', 'Gestión', 'Redes', 'Linux', 'CMS']
  },
  {
    company: 'IRTRAMMA',
    logo: 'irtramma_logo.png',
    period: '2005 – 2008',
    title: 'Desarrollador de Sistemas',
    responsibilities: [
        'Desarrollo del sistema de consulta pública de concesionarios.',
        'Mantenimiento de sistemas de nómina y atención a taxistas.',
        'Elaboración de sistema de análisis de operaciones del TUC (encuesta 2006).',
        'Mantenimiento de software con VB6 y Visual Studio 2005.'
    ],
    achievements: [
        'Diseño, desarrollo e implementación del Sistema de Consulta Pública de Concesionarios.',
        'Desarrollo del primer sistema automatizado de Inspección Técnico Mecánica Vehicular de Nicaragua, certificado por la Policía Nacional.',
        'Creación de un sistema para el estudio de la situación operacional del transporte urbano colectivo de Managua.'
    ],
    tags: ['Desarrollo', 'VB6', 'SQL Server']
  },
  {
    company: 'Comisariato de la Policía',
    logo: 'policia_logo.png',
    period: '2004 – 2005',
    title: 'Auxiliar de Sistemas',
    responsibilities: [
        'Soporte a usuarios en hardware y software.',
        'Mantenimiento de reportería del sistema.',
        'Administración de políticas en Active Directory (AD).'
    ],
    achievements: [
        'Elaboración de planillas y validación de datos de facturación.',
        'Gestión de inventario (entradas y salidas de bodega).',
        'Administración y consultas en bases de datos (Access, FoxPro).',
        'Encargado de la grabación del inventario físico mediante escáner de códigos de barras.'
    ],
    tags: ['Soporte', 'Mantenimiento', 'Access']
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Análisis y Gestión',
    skills: [
      { name: 'Análisis de Datos y Sistemas', level: 95 },
      { name: 'Liderazgo de Equipos', level: 90 },
      { name: 'Project Management (PMI)', level: 85 },
      { name: 'Metodologías Ágiles (Scrum)', level: 88 },
      { name: 'Business Intelligence (Power BI)', level: 80 }
    ]
  },
  {
    category: 'Desarrollo',
    skills: [
      { name: 'Oracle (PL/SQL, Forms, Reports)', level: 90 },
      { name: 'Microsoft .NET (C#, VB.NET)', level: 85 },
      { name: '.NET Core', level: 80 },
      { name: 'PHP y Laravel', level: 75 },
      { name: 'API Rest & Webservices', level: 80 }
    ]
  },
  {
    category: 'Bases de Datos',
    skills: [
      { name: 'Oracle Database', level: 95 },
      { name: 'Microsoft SQL Server', level: 90 },
      { name: 'MySQL / MariaDB', level: 80 },
      { name: 'PostgreSQL', level: 70 }
    ]
  },
  {
    category: 'Infraestructura y Soporte',
    skills: [
      { name: 'Administración de Servidores Windows/Linux', level: 85 },
      { name: 'Redes y Seguridad (Cisco)', level: 80 },
      { name: 'Soporte Técnico IT', level: 95 },
      { name: 'VoIP (Asterisk)', level: 70 }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'Ingeniería en Sistemas',
        institution: 'Universidad Nacional de Ingeniería (UNI)',
        period: '2000 – 2005',
        icon: GraduationCap
    },
    {
        degree: 'Bachillerato en Ciencias y Letras',
        institution: 'Instituto Loyola',
        period: '1993 - 1998',
        icon: ShieldCheck
    }
];

export const COURSES_DATA: CourseItem[] = [
    { name: 'Web dinámicas con PHP, Apache, PostgreSQL', category: 'Web' },
    { name: 'Técnico en Reparación de PC (UNI)', category: 'Infraestructura' },
    { name: 'MS SQL Server 2008 Analysis Services', category: 'Bases de datos' },
    { name: 'Web Development with Visual Studio 2010', category: 'Web' },
    { name: 'Data Access Solutions with VS 2010', category: 'Web' },
    { name: 'Administering MS SQL Server 2012', category: 'Bases de datos' },
    { name: 'Data Warehouse with MS SQL Server 2012', category: 'Bases de datos' },
    { name: 'Data Models and Reports with MS SQL Server', category: 'Bases de datos' },
    { name: 'Configuring and Administering SharePoint 2010', category: 'Gestión' },
    { name: 'Deploying Cisco Firewall ASA Solutions', category: 'Infraestructura' },
    { name: 'Project Server 2013 Inside Out', category: 'Gestión' },
    { name: 'Bizagi - Automatización de procesos', category: 'Gestión' },
    { name: 'Bizagi - Integración y Desarrollo', category: 'Gestión' },
    { name: 'Bizagi - Modelamiento de Procesos', category: 'Gestión' },
    { name: 'Arquitectura Orientada a Servicios (SOA)', category: 'Web' },
];


export const COMPANY_COLORS = {
    FDL: '#38bdf8',
    AIRPAK: '#00f5ff', 
    SUR: '#f500a8',    
    MIFIC: '#a855f7',   
    LOTERIA: '#34d399', 
    IRTRAMMA: '#facc15', 
    COMISARIATO: '#f97316', 
};

export const EXPERIENCE_BY_ROLE_DATA = [
  { role: 'SW Project Manager', FDL: 3, AIRPAK: 2, MIFIC: 4, IRTRAMMA: 2.6 },
  { role: 'Analista', FDL: 3, AIRPAK: 2, SUR: 5, MIFIC: 4, IRTRAMMA: 2.6 },
  { role: 'Desarrollador', FDL: 3, AIRPAK: 2, MIFIC: 4, IRTRAMMA: 2.6 },
  { role: 'DB Admin', FDL: 3, AIRPAK: 2, SUR: 5, MIFIC: 4, LOTERIA: 3, IRTRAMMA: 2.6, COMISARIATO: 1 },
  { role: 'Soporte IT', SUR: 5, LOTERIA: 3, COMISARIATO: 1 },
  { role: 'Server Admin', SUR: 5, LOTERIA: 3, IRTRAMMA: 2.6, COMISARIATO: 1 },
  { role: 'Net Admin', SUR: 5, LOTERIA: 3, IRTRAMMA: 2.6, COMISARIATO: 1 },
  { role: 'IT Manager', SUR: 5, LOTERIA: 3 },
  { role: 'Webmaster - CMS', LOTERIA: 3 },
].reverse();


export const CAREER_EVOLUTION_DATA: CareerDataPoint[] = [
    { year: 2004, roleType: 1, roleName: 'Auxiliar de Sistemas' },
    { year: 2005, roleType: 2, roleName: 'Desarrollador' },
    { year: 2008, roleType: 1, roleName: 'Jefe de Soporte' },
    { year: 2011, roleType: 2, roleName: 'Analista de Sistemas' },
    { year: 2015, roleType: 3, roleName: 'Jefe de TI' },
    { year: 2021, roleType: 3, roleName: 'Líder de Desarrollo' },
    { year: 2023, roleType: 2, roleName: 'Analista Desarrollador Sr. (FDL)' },
    { year: 2026, roleType: 2, roleName: 'Senior Oracle Forms & DB Developer (FDL)' },
];