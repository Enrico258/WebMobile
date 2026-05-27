import { NextResponse } from 'next/server';
import dadosDestino from '../../data/dados.json'; 

export async function GET() {
  return NextResponse.json(dadosDestino);
}