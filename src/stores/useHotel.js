import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useHotel = defineStore("hotel", () => {
  const hotels = ref([
    {
      name: "Bukit Vipassana Hotel",
      rating: 8.4,
      reviews: 1200,
      location: "Lembang, Bandung",
      price: 368569,
      originalPrice: 491125,
      discount: 25,
      amenities: ["Area main anak", "Layanan pijat", "Spa"],
      imageUrl: "img/hotel.jpeg",
    },
    {
      name: "The Gaia Hotel Bandung",
      rating: 9.0,
      reviews: 2100,
      location: "Setiabudi, Bandung",
      price: 1717445,
      originalPrice: 2366257,
      discount: 27,
      amenities: ["Ruang santai", "Teras rooftop", "Fasilitas bisnis"],
      imageUrl: "img/hotel.jpeg",
    },
    {
      name: "Bukit Papandayan Hotel",
      rating: 8.4,
      reviews: 1200,
      location: "Papandayan, Garut",
      price: 368569,
      originalPrice: 491125,
      discount: 25,
      amenities: ["Area main anak", "Layanan pijat", "Air panas"],
      imageUrl: "img/hotel.jpeg",
    },
    {
      name: "Grand Hotel Preanger",
      rating: 8.1,
      reviews: 800,
      location: "Bandung",
      price: 240000,
      originalPrice: 300000,
      discount: 20,
      amenities: ["Ruang santai", "Teras rooftop", "Fasilitas bisnis"],
      imageUrl: "img/hotel.jpeg",
    },
    {
      name: "Hotel Kedaton",
      rating: 8.0,
      reviews: 700,
      location: "Bandung",
      price: 180000,
      originalPrice: 225000,
      discount: 20,
      amenities: ["Ruang santai", "Teras rooftop", "Fasilitas bisnis"],
      imageUrl: "img/hotel.jpeg",
    },
    {
      name: "Hotel Padjadjaran",
      rating: 7.9,
      reviews: 500,
      location: "Bandung",
      price: 150000,
      originalPrice: 187500,
      discount: 20,
      amenities: ["Ruang santai", "Teras rooftop", "Fasilitas bisnis"],
      imageUrl: "img/hotel.jpeg",
    },
  ]);

  const filter = ref({
    name: "",
    rating: [],
    priceRange: {
      min: undefined,
      max: undefined,
    },
  });

  const filteredHotels = computed(() => {
    const hotelsArray = hotels.value;

    const filteredHotels = hotelsArray.filter((hotel) => {
      const matchesName = filter.value.name
        ? hotel.name.toLowerCase().includes(filter.value.name.toLowerCase())
        : true;
      const matchesRating =
        filter.value.rating.length > 0
          ? filter.value.rating.some((rating) => hotel.rating >= rating)
          : true;
      const matchesPrice =
        filter.value.priceRange.min !== undefined &&
        filter.value.priceRange.max !== undefined
          ? hotel.price >= filter.value.priceRange.min &&
            hotel.price <= filter.value.priceRange.max
          : true;

      return matchesName && matchesRating && matchesPrice;
    });

    return filteredHotels;
  });

  const setFilter = (newFilter) => {
    filter.value = { ...filter.value, ...newFilter };
  };

  return {
    hotels,
    filter,
    filteredHotels,
    setFilter,
  };
});
