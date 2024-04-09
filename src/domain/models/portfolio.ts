export type Portfolio = {
  id: string;
  name: string;
  description?: string | null;
};

export type PortfolioDTO = Omit<Portfolio, "id"> & { accountId: string };

export default Portfolio;
