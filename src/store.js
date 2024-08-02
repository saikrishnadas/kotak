import { create } from 'zustand'

export const useDocumentStore = create((set) => ({
  isDocumentReviewOpen: false,
  openDocumentReview: () => set({ isDocumentReviewOpen: true }),
  closeDocumentReview: () => set({ isDocumentReviewOpen: false }),
}))

export const useReviewTypeStore = create((set) => ({
  reviewType: null,
  setReviewType: (reviewType) => set(() => ({ reviewType: reviewType })),
}))
