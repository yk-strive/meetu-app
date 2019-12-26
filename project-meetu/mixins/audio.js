export default {
	data() {
		return {
			innerAudioContext: null,
			autoplay: false,
		}
	},
	onLoad() {
		this.innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.autoplay = true;
		
		this.innerAudioContext.onEnded(() => {
			console.log('播放结束')
			this.audioPlay = false;
		})
	},
	methods: {
		playVoice(voiceUrl) {
			console.log('不放你个')
			if (this.audioPlay) {
				this.innerAudioContext.pause();
				this.audioPlay = false;
			} else {
				if (voiceUrl) {
					this.innerAudioContext.src = voiceUrl;
					this.innerAudioContext.play();
					this.audioPlay = true;
				}
			}
		}
	}
}