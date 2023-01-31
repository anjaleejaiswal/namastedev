export const  filterData = (searchTxt,restaurant) => {
    return restaurant.filter(item => item?.data?.name?.toLowerCase().includes(searchTxt?.toLowerCase()))
};