import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/serverComponents/header/Header';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'A personal blog about all things concerning development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-100 w-100'>
        <Header />
        <main className='mt-28'>
          {children}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          cumque quisquam error id sed obcaecati dicta saepe totam! Dolorem quia
          repellendus eum et architecto deleniti, officia vel at atque quasi.
          Fuga vitae recusandae sequi! Soluta quae possimus aut cum beatae
          excepturi cumque deleniti recusandae dignissimos? Voluptatem
          temporibus, sequi labore quibusdam, porro ducimus soluta reprehenderit
          aut necessitatibus, similique autem perspiciatis. Dolorum! Quaerat,
          nam! Nesciunt praesentium corrupti tenetur incidunt dicta facere
          impedit debitis! Atque doloribus eius corporis eos maiores numquam
          possimus, itaque, velit, ratione voluptatem odio labore repellendus
          sint quia molestias aspernatur! Ipsa illum, inventore nesciunt
          accusamus doloribus ut sed nobis voluptates rerum sequi quidem nihil
          corrupti ducimus incidunt natus nostrum quas expedita ad? Repudiandae
          aliquid, dolores tempora nesciunt dicta sed facere. Odit non corrupti
          quia iusto officiis amet, eos tempore saepe corporis vel, praesentium
          quisquam, porro quo earum itaque explicabo quaerat molestiae nulla
          numquam? Dolorum repellat voluptates, iste ullam quas qui! Ea
          recusandae reiciendis, porro totam incidunt eos, ex eaque nihil et
          soluta dolore provident atque, accusantium error sed exercitationem.
          Magnam repellat, neque cumque dolorum nesciunt cum praesentium
          perspiciatis autem quam! Delectus in impedit itaque blanditiis ea
          illum fugiat sequi fugit suscipit error, nemo rerum quisquam veniam
          illo incidunt. Impedit dicta quam id obcaecati expedita quaerat nihil
          aspernatur ipsum commodi ad? Nemo, eius. Eum dolorem amet dignissimos
          tenetur iste! Dolorem alias odit incidunt, repellat consectetur
          ducimus explicabo vel in. Eius libero hic commodi temporibus voluptate
          nostrum aspernatur natus expedita magni tenetur! Tempore, facere saepe
          dolor aut asperiores amet. At labore ab aperiam quasi culpa ratione
          nihil soluta, esse maiores adipisci sequi repudiandae magni
          dignissimos cupiditate facere odio nobis? Accusamus, asperiores quia.
          Hic, esse. Expedita nesciunt quam dolor asperiores, saepe laboriosam
          culpa repellendus voluptas harum dolorem quos. Enim assumenda
          blanditiis maiores necessitatibus delectus! Maiores adipisci dolorum
          quae, aut beatae ullam labore quaerat?
        </main>
      </body>
    </html>
  );
}
