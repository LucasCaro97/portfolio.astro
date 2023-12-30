import Layout from '../layouts/Layout.astro';
import Badge from '../components/Badge.astro';
import LinkedInIcon from '../icons/LinkedIn.astro';
import GithubIcon from '../icons/Github.astro';
import SocialPill from '../components/SocialPill.astro';
import MailIcon from '../components/Mail.astro';
import Experience from '../components/Experience.astro';
import SectionContainer from '../components/SectionContainer.astro';

<Fragment>
<Layout title="Portfolio de Lucas Caro - Desarrollador y Programador Web" description="Contrata a Lucas Caro para crear tu aplicacion web. Desarrollador Web. Especializado en crear aplicaciones adaptadas a tu negocio.">
<main>
<SectionContainer class="rounded-full size-12 mb-4" src="/midudev.webp" alt="midudev photo" {...{ "<img": true }} />
<h1 class="text-white text-5xl font-bold flex flex-row  gap-x-4  gap-x-4 pb-10">
Hey, soy Lucas Caro <a href="https://www.linkedin.com/in/lucas-nahuel-caro/" target="_blank" rel="noopener" class="flex justify-center items-center">
<Badge>Disponible para trabajar</Badge>
</a>

</h1>
<h2 class="text-2xl opacity-80 text-wrap">
<span>Desarrollador Web Junior con 1 año de experiencia.</span>
<span class="text-red-200/90"> He desarrollado aplicaciones web a medida para pymes y pequeñas empresas.</span>
<span class="opacity-85"> Soy de Misiones, Argentina.</span>
</h2>

<nav class="flex gap-x-4 mt-8">
<SocialPill href="https://www.linkedin.com/in/lucas-nahuel-caro/">
<LinkedInIcon class="w-6 h6" />
LinkedIn
</SocialPill>
<SocialPill href="https://github.com/LucasCaro97/">
<GithubIcon class="w-6 h6" />
GitHub
</SocialPill>
<SocialPill href="mailto:lucascaro97@gmail.com">
<MailIcon class="w-6 h6" />
lucascaro97@gmail.com
</SocialPill>

</nav>
</main>

<SectionContainer>
<Experience />
</SectionContainer>
</Layout>



</Fragment>;
