const axios = require("axios");
const { date2str } = require("../helper");
const { STORE_PERIOD_MS, NUM_OF_DATA_PER_PAGE } = require("../constant");

const BASE_URL = "1320000/LosfundInfoInqireService";
const API_KEY = process.env.KEY_FOUND_API;

module.exports = {
  async fetchList(page) {
    const url = `${BASE_URL}/getLosfundInfoAccToClAreaPd`;
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

      console.log(`fetch ${item.length} found data(page: ${page})`);
      return item;
    } catch {
      console.error(`fail to fetch page ${page}`);
    }
  },

  async fetchDetail(atcId, fdSn) {
    const url = `${BASE_URL}/getLosfundDetailInfo`;
    const params = { serviceKey: API_KEY, ATC_ID: atcId, FD_SN: fdSn };

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
        image: item.fdFilePathImg,
        location_storing: item.depPlace,
        location_found: item.fdPlace,
        item: item.fdPrdtNm,
        detail: item.uniq,
        status: item.csteSteNm,
        date: item.fdYmd,
        office: item.orgNm,
        tel: item.tel,
      };
    } catch {
      console.error(`fail to fetch ${atcId}`);
    }
  },
};
