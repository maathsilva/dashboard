import { DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>
          <DollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/foto01.JPG" />
            <AvatarFallback>...</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Matheus Silva</p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              matheussilva@gmail.com
            </span>
          </div>
        </article>
      </CardContent>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/foto02.JPG" />
            <AvatarFallback>...</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Guilherme Alves
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              guilhermealves@gmail.com
            </span>
          </div>
        </article>
      </CardContent>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/foto03.JPG" />
            <AvatarFallback>...</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Marcos Vaz</p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              marcosvaz@gmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
