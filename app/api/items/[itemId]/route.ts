import { deleteItem } from "@/services/supabase/items";

export async function DELETE(
  req: Request,
  { params }: { params: { itemId: string } }
) {
  const { itemId } = await params;
  try {
    await deleteItem(Number(itemId));
    return Response.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: `${(error as Error).message}` },
      { status: 500 }
    );
  }
}
