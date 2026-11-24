type MarketingPage = {
  fieldData: {
    name: string;
    slug: string;
    'hero-eyebrow'?: string | null;
    'hero-headline'?: string | null;
    'hero-body'?: string | null;
    'primary-cta-label'?: string | null;
    'primary-cta-url'?: string | null;
    'secondary-cta-label'?: string | null;
    'secondary-cta-url'?: string | null;
  };
};

export async function getMarketingPages() {

  const collectionId = '6b043d89294085a75283de53';
  const token = import.meta.env.WEBFLOW_API_TOKEN;

  const response = await fetch(
    `https://api.webflow.com/v2/collections/${collectionId}/items`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Webflow request failed: ${response.status}`);
  }

  const data: { items: MarketingPage[] } = await response.json();

  return data.items;

}



type Solution = {
  fieldData: {
    name: string;
    slug: string;
    summary?: string | null;
  };
};

export async function getSolutions() {

  const collectionId = '6afd70cd3ff646dde9493ed9';
  const token = import.meta.env.WEBFLOW_API_TOKEN;

  const response = await fetch(
    `https://api.webflow.com/v2/collections/${collectionId}/items`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Webflow request failed: ${response.status}`);
  }

  const data: { items: Solution[] } = await response.json();

  return data.items;
  
}