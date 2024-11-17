//app/api/me/route.ts
import fakeUser from "@/faker/fakeUser";
import { NextResponse} from "next/server";

export async function GET() {
    return NextResponse.json(fakeUser)
}

