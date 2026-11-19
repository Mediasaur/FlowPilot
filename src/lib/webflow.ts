type Solution = {
  fieldData: {
    name: string;
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