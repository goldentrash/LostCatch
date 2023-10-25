const axios = require("axios");
const { date2str } = require("../helper");
const { STORE_PERIOD_MS, NUM_OF_DATA_PER_PAGE } = require("../constant");

const BASE_URL = "1320000/LostGoodsInfoInqireService";
const API_KEY = process.env.KEY_LOST_API;

module.exports = {
  async fetchList(page) {
    const url = `${BASE_URL}/getLostGoodsInfoAccToClAreaPd`;
    const params = {
      serviceKey: API_KEY,
      START_YMD: date2str(new Date(Date.now() - STORE_PERIOD_MS)),
      END_YMD: date2str(new Date()),
      pageNo: page,
      numOfRows: NUM_OF_DATA_PER_PAGE,
    };

    try {
      const {
        data: {
          response: {
            body: {
              items: { item },
            },
          },
        },
      } = await axios.get(url, { params });

      console.log(`fetch ${item.length} lost data(page: ${page})`);
      return item;
    } catch {
      console.error(`fail to fetch page ${page}`);
    }
  },

  async fetchDetail(atcId) {
    const url = `${BASE_URL}/getLostGoodsDetailInfo`;
    const params = { serviceKey: API_KEY, ATC_ID: atcId };

    try {
      const {
        data: {
          response: {
            body: { item },
          },
        },
      } = await axios.get(url, { params });

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
