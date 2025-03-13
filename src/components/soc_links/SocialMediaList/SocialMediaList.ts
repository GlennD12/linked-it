import FacebookIcon from "@/components/icons/facebook.logo.svg";
import YoutubeIcon from "@/components/icons/youtube.logo.svg"
export default {
  name: "SocialMediaList",
  data(){
    return{
      socialMediaLists: [
        {"id" : "1", "title" : "Facebook", "image" : FacebookIcon},
        {"id" : "2", "title" : "Youtube", "image" : YoutubeIcon},
      ]
    }
  }
}

