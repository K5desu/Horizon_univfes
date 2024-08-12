import Image from "next/image";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
export default function Page() {
  return (
    <div>
      <div className="py-5 flex  flex-col justify-center items-center">
        <div className="block text-3xl font-bold text-gray-800 dark:text-white py-10">
          私たちについて
        </div>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>活動時間について</AlertTitle>
          <AlertDescription>
            活動時間は毎週火曜の17:00~19:00です。
            瀬田のビラと異なる情報ですがこちらが正しいです。
          </AlertDescription>
        </Alert>

        <Image
          src="/Horizon.jpg"
          height={242}
          width={300}
          alt="tosi"
          className="mt-10"
        ></Image>
        <div className="mx-5 mt-10 text-lg">
          こんにちは！Horizonです！ 私たちについて少し紹介させてください！
          <br />
          <br />
          私たちは龍谷大学プログラミング部{" "}
          <span className="font-bold text-2xl">Horizon</span>
          です。
          <br />
          <br />
          Horizonに入れば優れた学習環境と豊富な教材で効率的なスキルアップが可能です!
          <span className="text-red-500 text-3xl font-bold">📈</span>
          <br />
          <br />
          またほとんどの人が初心者からのスタートなので、プログラミングって難しそうという不安もいりません！
          <br />
          <br />
          そして楽しいイベントも豊富なので後悔のない大学生活になること間違えなし！！
          <br />
          <br />
          <span className="font-bold text-shadow">
            ぜひ楽しんでいってください!🚀🚀🌟🌟
          </span>
        </div>
      </div>
    </div>
  );
}
