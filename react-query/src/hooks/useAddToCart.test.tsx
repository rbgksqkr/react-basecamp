import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react";
import { CartItem } from "../types";
import { useAddToCart } from "./useAddToCart";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useAddToCart", () => {
  it("장바구니에 상품을 추가할 수 있다", async () => {
    const { result } = renderHook(() => useAddToCart(), { wrapper });

    act(() => {
      result.current.mutate({ id: 3, productId: 1, quantity: 1 });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual<CartItem>({
      id: 3,
      productId: 1,
      quantity: 1,
    });
  });
});
