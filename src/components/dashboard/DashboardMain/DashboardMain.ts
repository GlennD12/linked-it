import LinkHeaderMain from "@/components/shared/link_header/LinkHeaderMain/LinkHeaderMain.vue";
import { defineComponent } from "vue";
import userDB from "@/assets/json/db.json";

export default defineComponent({
  name: "DashboardMain",
  components: {
    LinkHeaderMain
  },
  data() {
    return {
      pageName: "dashboard",
      userData: userDB.users,
    }
  },
  mounted() {
    console.log(this.pageName);
    console.log(this.userData);
    this.userData.forEach((item) => {
      console.log("Email: ", item.email);
      console.log("Name: ", item.name);
    });
  }
})

