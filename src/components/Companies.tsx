import { Company } from './Company'

const companies = [
  {
    name: "Efficiency Service",
    photoUrl: "/images/logo_es.png",
    bio: "Contabilidade experiente, personalizada e abrangente. Especialista em relatórios financeiros, impostos, conformidade e planejamento estratégico, com suporte em folha de pagamento e RH.",
    website: "http://efficiencyservice.com.br/"
  },
  {
    name: "Contabil Planejamento",
    photoUrl: "/images/logo_cp.png",
    bio: "Parceiro líder em serviços terceirizados premium: portaria, controle de acesso eficiente, limpeza profissional e gestão completa de facilities para máxima eficiência empresarial.",
    website: "https://contabilplanejamento.com.br/"
  },
]

export function Companies() {
  return (
    <section className="w-full">
      <h3 className="text-slate-950 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 pb-2 border-b border-amber-500 inline-block">
        Empresas Parceiras
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-16 pt-6'>
        {companies.map((company) => <Company key={company.name} {...company} />)}
      </div>
    </section>
  )
}