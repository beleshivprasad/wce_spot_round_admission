const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema(
  {
    l_open_cse: {
      type: String,
      default: "0",
    },
    l_open_it: {
      type: String,
      default: "0",
    },
    l_open_electronics: {
      type: String,
      default: "0",
    },
    l_open_civil: {
      type: String,
      default: "0",
    },
    l_open_mechanical: {
      type: String,
      default: "0",
    },
    l_open_electrical: {
      type: String,
      default: "0",
    },
    l_sc_cse: {
      type: String,
      default: "0",
    },
    l_sc_it: {
      type: String,
      default: "0",
    },
    l_sc_electronics: {
      type: String,
      default: "0",
    },
    l_sc_civil: {
      type: String,
      default: "0",
    },
    l_sc_mechanical: {
      type: String,
      default: "0",
    },
    l_sc_electrical: {
      type: String,
      default: "0",
    },
    l_st_cse: {
      type: String,
      default: "0",
    },
    l_st_it: {
      type: String,
      default: "0",
    },
    l_st_electronics: {
      type: String,
      default: "0",
    },
    l_st_civil: {
      type: String,
      default: "0",
    },
    l_st_mechanical: {
      type: String,
      default: "0",
    },
    l_st_electrical: {
      type: String,
      default: "0",
    },
    l_vjdt_cse: {
      type: String,
      default: "0",
    },
    l_vjdt_it: {
      type: String,
      default: "0",
    },
    l_vjdt_electronics: {
      type: String,
      default: "0",
    },
    l_vjdt_civil: {
      type: String,
      default: "0",
    },
    l_vjdt_mechanical: {
      type: String,
      default: "0",
    },
    l_vjdt_electrical: {
      type: String,
      default: "0",
    },
    l_ntb_cse: {
      type: String,
      default: "0",
    },
    l_ntb_it: {
      type: String,
      default: "0",
    },
    l_ntb_electronics: {
      type: String,
      default: "0",
    },
    l_ntb_civil: {
      type: String,
      default: "0",
    },
    l_ntb_mechanical: {
      type: String,
      default: "0",
    },
    l_ntb_electrical: {
      type: String,
      default: "0",
    },
    l_ntc_cse: {
      type: String,
      default: "0",
    },
    l_ntc_it: {
      type: String,
      default: "0",
    },
    l_ntc_electronics: {
      type: String,
      default: "0",
    },
    l_ntc_civil: {
      type: String,
      default: "0",
    },
    l_ntc_mechanical: {
      type: String,
      default: "0",
    },
    l_ntc_electrical: {
      type: String,
      default: "0",
    },
    l_ntd_cse: {
      type: String,
      default: "0",
    },
    l_ntd_it: {
      type: String,
      default: "0",
    },
    l_ntd_electronics: {
      type: String,
      default: "0",
    },
    l_ntd_civil: {
      type: String,
      default: "0",
    },
    l_ntd_mechanical: {
      type: String,
      default: "0",
    },
    l_ntd_electrical: {
      type: String,
      default: "0",
    },
    l_obc_cse: {
      type: String,
      default: "0",
    },
    l_obc_it: {
      type: String,
      default: "0",
    },
    l_obc_electronics: {
      type: String,
      default: "0",
    },
    l_obc_civil: {
      type: String,
      default: "0",
    },
    l_obc_mechanical: {
      type: String,
      default: "0",
    },
    l_obc_electrical: {
      type: String,
      default: "0",
    },
    l_sebc_cse: {
      type: String,
      default: "0",
    },
    l_sebc_it: {
      type: String,
      default: "0",
    },
    l_sebc_electronics: {
      type: String,
      default: "0",
    },
    l_sebc_civil: {
      type: String,
      default: "0",
    },
    l_sebc_mechanical: {
      type: String,
      default: "0",
    },
    l_sebc_electrical: {
      type: String,
      default: "0",
    },
    //for General
    g_open_cse: {
      type: String,
      default: "0",
    },
    g_open_it: {
      type: String,
      default: "0",
    },
    g_open_electronics: {
      type: String,
      default: "0",
    },
    g_open_civil: {
      type: String,
      default: "0",
    },
    g_open_mechanical: {
      type: String,
      default: "0",
    },
    g_open_electrical: {
      type: String,
      default: "0",
    },
    g_sc_cse: {
      type: String,
      default: "0",
    },
    g_sc_it: {
      type: String,
      default: "0",
    },
    g_sc_electronics: {
      type: String,
      default: "0",
    },
    g_sc_civil: {
      type: String,
      default: "0",
    },
    g_sc_mechanical: {
      type: String,
      default: "0",
    },
    g_sc_electrical: {
      type: String,
      default: "0",
    },
    g_st_cse: {
      type: String,
      default: "0",
    },
    g_st_it: {
      type: String,
      default: "0",
    },
    g_st_electronics: {
      type: String,
      default: "0",
    },
    g_st_civil: {
      type: String,
      default: "0",
    },
    g_st_mechanical: {
      type: String,
      default: "0",
    },
    g_st_electrical: {
      type: String,
      default: "0",
    },
    g_vjdt_cse: {
      type: String,
      default: "0",
    },
    g_vjdt_it: {
      type: String,
      default: "0",
    },
    g_vjdt_electronics: {
      type: String,
      default: "0",
    },
    g_vjdt_civil: {
      type: String,
      default: "0",
    },
    g_vjdt_mechanical: {
      type: String,
      default: "0",
    },
    g_vjdt_electrical: {
      type: String,
      default: "0",
    },
    g_ntb_cse: {
      type: String,
      default: "0",
    },
    g_ntb_it: {
      type: String,
      default: "0",
    },
    g_ntb_electronics: {
      type: String,
      default: "0",
    },
    g_ntb_civil: {
      type: String,
      default: "0",
    },
    g_ntb_mechanical: {
      type: String,
      default: "0",
    },
    g_ntb_electrical: {
      type: String,
      default: "0",
    },
    g_ntc_cse: {
      type: String,
      default: "0",
    },
    g_ntc_it: {
      type: String,
      default: "0",
    },
    g_ntc_electronics: {
      type: String,
      default: "0",
    },
    g_ntc_civil: {
      type: String,
      default: "0",
    },
    g_ntc_mechanical: {
      type: String,
      default: "0",
    },
    g_ntc_electrical: {
      type: String,
      default: "0",
    },
    g_ntd_cse: {
      type: String,
      default: "0",
    },
    g_ntd_it: {
      type: String,
      default: "0",
    },
    g_ntd_electronics: {
      type: String,
      default: "0",
    },
    g_ntd_civil: {
      type: String,
      default: "0",
    },
    g_ntd_mechanical: {
      type: String,
      default: "0",
    },
    g_ntd_electrical: {
      type: String,
      default: "0",
    },
    g_obc_cse: {
      type: String,
      default: "0",
    },
    g_obc_it: {
      type: String,
      default: "0",
    },
    g_obc_electronics: {
      type: String,
      default: "0",
    },
    g_obc_civil: {
      type: String,
      default: "0",
    },
    g_obc_mechanical: {
      type: String,
      default: "0",
    },
    g_obc_electrical: {
      type: String,
      default: "0",
    },
    g_sebc_cse: {
      type: String,
      default: "0",
    },
    g_sebc_it: {
      type: String,
      default: "0",
    },
    g_sebc_electronics: {
      type: String,
      default: "0",
    },
    g_sebc_civil: {
      type: String,
      default: "0",
    },
    g_sebc_mechanical: {
      type: String,
      default: "0",
    },
    g_sebc_electrical: {
      type: String,
      default: "0",
    },
    //pw
    pw_open_cse: {
      type: String,
      default: "0",
    },
    pw_open_it: {
      type: String,
      default: "0",
    },
    pw_open_electronics: {
      type: String,
      default: "0",
    },
    pw_open_civil: {
      type: String,
      default: "0",
    },
    pw_open_mechanical: {
      type: String,
      default: "0",
    },
    pw_open_electrical: {
      type: String,
      default: "0",
    },
    pw_sc_cse: {
      type: String,
      default: "0",
    },
    pw_sc_it: {
      type: String,
      default: "0",
    },
    pw_sc_electronics: {
      type: String,
      default: "0",
    },
    pw_sc_civil: {
      type: String,
      default: "0",
    },
    pw_sc_mechanical: {
      type: String,
      default: "0",
    },
    pw_sc_electrical: {
      type: String,
      default: "0",
    },
    pw_st_cse: {
      type: String,
      default: "0",
    },
    pw_st_it: {
      type: String,
      default: "0",
    },
    pw_st_electronics: {
      type: String,
      default: "0",
    },
    pw_st_civil: {
      type: String,
      default: "0",
    },
    pw_st_mechanical: {
      type: String,
      default: "0",
    },
    pw_st_electrical: {
      type: String,
      default: "0",
    },
    pw_vjdt_cse: {
      type: String,
      default: "0",
    },
    pw_vjdt_it: {
      type: String,
      default: "0",
    },
    pw_vjdt_electronics: {
      type: String,
      default: "0",
    },
    pw_vjdt_civil: {
      type: String,
      default: "0",
    },
    pw_vjdt_mechanical: {
      type: String,
      default: "0",
    },
    pw_vjdt_electrical: {
      type: String,
      default: "0",
    },
    pw_ntb_cse: {
      type: String,
      default: "0",
    },
    pw_ntb_it: {
      type: String,
      default: "0",
    },
    pw_ntb_electronics: {
      type: String,
      default: "0",
    },
    pw_ntb_civil: {
      type: String,
      default: "0",
    },
    pw_ntb_mechanical: {
      type: String,
      default: "0",
    },
    pw_ntb_electrical: {
      type: String,
      default: "0",
    },
    pw_ntc_cse: {
      type: String,
      default: "0",
    },
    pw_ntc_it: {
      type: String,
      default: "0",
    },
    pw_ntc_electronics: {
      type: String,
      default: "0",
    },
    pw_ntc_civil: {
      type: String,
      default: "0",
    },
    pw_ntc_mechanical: {
      type: String,
      default: "0",
    },
    pw_ntc_electrical: {
      type: String,
      default: "0",
    },
    pw_ntd_cse: {
      type: String,
      default: "0",
    },
    pw_ntd_it: {
      type: String,
      default: "0",
    },
    pw_ntd_electronics: {
      type: String,
      default: "0",
    },
    pw_ntd_civil: {
      type: String,
      default: "0",
    },
    pw_ntd_mechanical: {
      type: String,
      default: "0",
    },
    pw_ntd_electrical: {
      type: String,
      default: "0",
    },
    pw_obc_cse: {
      type: String,
      default: "0",
    },
    pw_obc_it: {
      type: String,
      default: "0",
    },
    pw_obc_electronics: {
      type: String,
      default: "0",
    },
    pw_obc_civil: {
      type: String,
      default: "0",
    },
    pw_obc_mechanical: {
      type: String,
      default: "0",
    },
    pw_obc_electrical: {
      type: String,
      default: "0",
    },
    pw_sebc_cse: {
      type: String,
      default: "0",
    },
    pw_sebc_it: {
      type: String,
      default: "0",
    },
    pw_sebc_electronics: {
      type: String,
      default: "0",
    },
    pw_sebc_civil: {
      type: String,
      default: "0",
    },
    pw_sebc_mechanical: {
      type: String,
      default: "0",
    },
    pw_sebc_electrical: {
      type: String,
      default: "0",
    },
    //def
    def_open_cse: {
      type: String,
      default: "0",
    },
    def_open_it: {
      type: String,
      default: "0",
    },
    def_open_electronics: {
      type: String,
      default: "0",
    },
    def_open_civil: {
      type: String,
      default: "0",
    },
    def_open_mechanical: {
      type: String,
      default: "0",
    },
    def_open_electrical: {
      type: String,
      default: "0",
    },
    def_sc_cse: {
      type: String,
      default: "0",
    },
    def_sc_it: {
      type: String,
      default: "0",
    },
    def_sc_electronics: {
      type: String,
      default: "0",
    },
    def_sc_civil: {
      type: String,
      default: "0",
    },
    def_sc_mechanical: {
      type: String,
      default: "0",
    },
    def_sc_electrical: {
      type: String,
      default: "0",
    },
    def_st_cse: {
      type: String,
      default: "0",
    },
    def_st_it: {
      type: String,
      default: "0",
    },
    def_st_electronics: {
      type: String,
      default: "0",
    },
    def_st_civil: {
      type: String,
      default: "0",
    },
    def_st_mechanical: {
      type: String,
      default: "0",
    },
    def_st_electrical: {
      type: String,
      default: "0",
    },
    def_vjdt_cse: {
      type: String,
      default: "0",
    },
    def_vjdt_it: {
      type: String,
      default: "0",
    },
    def_vjdt_electronics: {
      type: String,
      default: "0",
    },
    def_vjdt_civil: {
      type: String,
      default: "0",
    },
    def_vjdt_mechanical: {
      type: String,
      default: "0",
    },
    def_vjdt_electrical: {
      type: String,
      default: "0",
    },
    def_ntb_cse: {
      type: String,
      default: "0",
    },
    def_ntb_it: {
      type: String,
      default: "0",
    },
    def_ntb_electronics: {
      type: String,
      default: "0",
    },
    def_ntb_civil: {
      type: String,
      default: "0",
    },
    def_ntb_mechanical: {
      type: String,
      default: "0",
    },
    def_ntb_electrical: {
      type: String,
      default: "0",
    },
    def_ntc_cse: {
      type: String,
      default: "0",
    },
    def_ntc_it: {
      type: String,
      default: "0",
    },
    def_ntc_electronics: {
      type: String,
      default: "0",
    },
    def_ntc_civil: {
      type: String,
      default: "0",
    },
    def_ntc_mechanical: {
      type: String,
      default: "0",
    },
    def_ntc_electrical: {
      type: String,
      default: "0",
    },
    def_ntd_cse: {
      type: String,
      default: "0",
    },
    def_ntd_it: {
      type: String,
      default: "0",
    },
    def_ntd_electronics: {
      type: String,
      default: "0",
    },
    def_ntd_civil: {
      type: String,
      default: "0",
    },
    def_ntd_mechanical: {
      type: String,
      default: "0",
    },
    def_ntd_electrical: {
      type: String,
      default: "0",
    },
    def_obc_cse: {
      type: String,
      default: "0",
    },
    def_obc_it: {
      type: String,
      default: "0",
    },
    def_obc_electronics: {
      type: String,
      default: "0",
    },
    def_obc_civil: {
      type: String,
      default: "0",
    },
    def_obc_mechanical: {
      type: String,
      default: "0",
    },
    def_obc_electrical: {
      type: String,
      default: "0",
    },
    def_sebc_cse: {
      type: String,
      default: "0",
    },
    def_sebc_it: {
      type: String,
      default: "0",
    },
    def_sebc_electronics: {
      type: String,
      default: "0",
    },
    def_sebc_civil: {
      type: String,
      default: "0",
    },
    def_sebc_mechanical: {
      type: String,
      default: "0",
    },
    def_sebc_electrical: {
      type: String,
      default: "0",
    },
    //orphan
    g_orphan_cse: {
      type: String,
      default: "0",
    },
    g_orphan_it: {
      type: String,
      default: "0",
    },
    g_orphan_electronics: {
      type: String,
      default: "0",
    },
    g_orphan_civil: {
      type: String,
      default: "0",
    },
    g_orphan_mechanical: {
      type: String,
      default: "0",
    },
    g_orphan_electrical: {
      type: String,
      default: "0",
    },
    start: {
      type: String,
      default: "",
    },
    end: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Vacancy = mongoose.model("vacancy", vacancySchema);

module.exports = Vacancy;
