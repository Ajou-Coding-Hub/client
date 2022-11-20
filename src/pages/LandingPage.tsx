import { SectionEditor } from "@/components/sections/SectionEditor";
import { SectionFirst } from "@/components/sections/SectionFirst";
import { data } from "@/homedata";
import { SectionPower } from "@/components/sections/SectionPower";
import { SectionFaster } from "@/components/sections/SectionFaster";
import { SectionEnv } from "@/components/sections/SectionEnv";
import { SectionPreview } from "@/components/sections/SectionPreview";
import { SectionMoreDetail } from "@/components/sections/SectionMoreDetail";

const LandingPage = () => {
  return (
    <main className="bg-gh-primary text-black overflow-x-hidden">
      <section className="pb-16">
        <SectionFirst data={data.sectionFirst} />
        <SectionEditor />
      </section>
      <section className="px-4">
        <SectionPreview data={data.sectionPreview} />
        <SectionPower data={data.sectionPower} />
        <SectionFaster data={data.sectionFaster} />
        <SectionEnv data={data.sectionEnv} />
      </section>
      <section>
        <SectionMoreDetail data={data.sectionMoreDetail} />
      </section>
    </main>
  );
};

export default LandingPage;
