import LinkHeaderMain from "@/components/shared/link_header/LinkHeaderMain/LinkHeaderMain.vue";
import SocialMediaList from "@/components/soc_links/SocialMediaList/SocialMediaList.vue";
import AddBtnImage from "@/components/icons/add.button.svg";
import RemoveBtnImage from "@/components/icons/minus.button.svg";
import ProfileSocialLinks from "@/assets/json/social_link.json";
import FacebookLogo from "@/components/icons/facebook.logo.svg"

export default {
  name: "SocialLinksMain",
  components: {
    LinkHeaderMain,
    SocialMediaList,
  },
  data() {
    return {
      pageName: "social_links",
      // toggleSocialMediaSelection: false,
      addBtnImage: AddBtnImage,
      removeBtnImage: RemoveBtnImage,
      profileSocialLinks: ProfileSocialLinks,
      facebookLogo: FacebookLogo,
      toggleSocialMediaSelection: [{
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
        "10": false,
      }]
    }
  }
}

