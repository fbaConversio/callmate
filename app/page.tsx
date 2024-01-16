import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="w-full">
      <Tabs defaultValue="potential" className="w-full">
        <div className="flex justify-between px-6 xl:px-[200px] items-center pt-8 lg:pt-18">
          <h1 className="text-[24px] font-semibold">Gennemgå opkald</h1>
          <TabsList className="grid w-[258px] grid-cols-3">
            <TabsTrigger value="potential">Potentiale</TabsTrigger>
            <TabsTrigger value="interest">Interesse</TabsTrigger>
            <TabsTrigger value="missing">Mangler</TabsTrigger>
          </TabsList>
        </div>
        <hr className="mt-9 mb-15" />
        <TabsContent value="potential">
          <div className="px-6 xl:px-[200px]">
            <h2 className="font-semibold text-[18px]">Potentiale</h2>
            <p className="text-[14px] text-med-gray">
              Opkald med potentiale for at blive til en kunde
            </p>
          </div>
        </TabsContent>

        <TabsContent value="interest">
          <div className="px-6 xl:px-[200px]">
            <h2 className="font-semibold text-[18px]">Interesse</h2>
            <p className="text-[14px] text-med-gray">
              Opkald med interesse for produktet
            </p>
          </div>
        </TabsContent>

        <TabsContent value="missing">
          <div className="px-6 xl:px-[200px]">
            <h2 className="font-semibold text-[18px]">Mangler</h2>
            <p className="text-[14px] text-med-gray">
              Opkald som mangler information
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
