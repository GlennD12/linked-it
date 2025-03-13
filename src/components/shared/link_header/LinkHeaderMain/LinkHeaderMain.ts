
// import LinkHeaderProfile from "../LinkHeaderProfile/LinkHeaderProfile.vue"
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "LinkHeaderMain",
  components: {
  },
  data(){
    return {
      openProfile: false,
      openMobileMenu: false,
    }
  },
  props: {
    page: {
      required: true,
      type: String,
    },
  },
  methods: {
  },
  computed: {
    isDashboardActive(): any {
      return (this.$props.page === 'dashboard' ? true : false);
    },
    isSocialLinkActive(): any {
      return (this.$props.page === 'social_links' ? true : false);
    },
    isDiscoverActive(): any {
      return (this.$props.page === 'discover' ? true : false);
    }
  }
});

