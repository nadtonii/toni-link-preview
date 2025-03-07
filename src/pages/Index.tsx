
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="text-left max-w-6xl px-[80px]">
        <p className="text-neutral-1100 text-6xl lg:text-7xl md:text-5xl">
          Hey, I'm{" "}
          <LinkPreview 
            url="https://www.instagram.com/nad.tonii?igsh=N29rMXFiMHEzdDZ4&utm_source=qr" 
            className="font-bold"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            Toni
          </LinkPreview>
          . Young product designer based in{" "}
          <LinkPreview 
            url="https://en.wikipedia.org/wiki/Zagreb" 
            className="font-bold"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            Zagreb
          </LinkPreview>{" "}
          currently working at{" "}
          <LinkPreview 
            url="https://optimoroute.com" 
            className="font-bold text-[#2E6BE6]"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            OptimoRoute
          </LinkPreview>
          . I created{" "}
          <LinkPreview 
            url="https://www.behance.net" 
            className="font-bold text-[#99CAFC]"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            Stack
          </LinkPreview>{" "}
          and my{" "}
          <LinkPreview 
            url="https://www.behance.net" 
            className="font-bold text-[#F45D5D]"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            healthcare project
          </LinkPreview>{" "}
          is underway. A{" "}
          <LinkPreview 
            url="https://portfolio.tnad.xyz"
            className="font-bold text-[#BF3F57]"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            &lt;real portfolio&gt;
          </LinkPreview>{" "}
          with all the case studies?
        </p>
        <p className="text-neutral-1100 text-xl mt-6">
          This is my{" "}
          <LinkPreview 
            url="https://www.linkedin.com/in/tnad/" 
            className="font-bold text-[#0A66C2]"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            LinkedIn
          </LinkPreview>
          , and this is my{" "}
          <LinkPreview 
            url="mailto:hi@tnad.xyz" 
            className="font-bold text-[#34A853]"
            isStatic={true}
            imageSrc="/lovable-uploads/163ef39b-6cbe-43eb-8cad-e04a688d89e6.png"
          >
            Email
          </LinkPreview>
          .
        </p>
      </div>
    </div>
  );
};

export default Index;
