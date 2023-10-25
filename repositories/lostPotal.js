const axios = require("axios");
const { date2str } = require("../helper");
const { STORE_PERIOD_MS, NUM_OF_DATA_PER_PAGE } = require("../constant");

const BASE_URL = "1320000/LostGoodsInfoInqireService";
const API_KEY = process.env.KEY_LOST_API;

module.exports = {
  async fetchList(page) {
    try {
      const {
        data: {
          response: {
            body: {
              items: { item },
            },
          },
        },
      } = await axios.get(
        `${BASE_URL}/getLostGoodsInfoAccToClAreaPd?serviceKey=${API_KEY}&START_YMD=${date2str(
          new Date(Date.now() - STORE_PERIOD_MS)
        )}&END_YMD=${date2str(
          new Date()
        )}&pageNo=${page}&numOfRows=${NUM_OF_DATA_PER_PAGE}`
      );

      console.log(`fetch ${item.length} lost data(page: ${page})\n`);
      return item;
    } catch {
      console.error(`fail to fetch page ${page}`);
    }
  },

  async fetchDetail(atcId) {
    try {
      const {
        data: {
          response: {
            body: { item },
          },
        },
      } = await axios.get(
        `${BASE_URL}/getLostGoodsDetailInfo?serviceKey=${API_KEY}&ATC_ID=${atcId}`
      );

      return {
        atc_id: atcId,
        image: item.lstFilePathImg,
        location_city: item.lstLctNm,
        location_detail: item.lstPlace,
        location_type: item.lstPlaceSeNm,
        item: item.lstPrdtNm,
        title: item.lstSbjt,
        status: item.lstSteNm,
        date: item.lstYmd,
        office: item.orgNm,
        tel: item.tel,
      };
    } catch {
      console.error(`fail to fetch ${atcId}`);
    }
  },
};
