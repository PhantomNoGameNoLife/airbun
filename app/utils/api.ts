const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const explorData = await res.json();
    return explorData;
  } catch (error) {
    console.log(error);
  }
};

const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const LiveData = await res.json();
    return LiveData;
  } catch (error) {
    console.log(error);
  }
};

const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultData = await res.json();
    return searchResultData;
  } catch (error) {
    console.log(error);
  }
};

export { getExplore, getLive, getSearchResult };
