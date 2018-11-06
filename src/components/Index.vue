<template>
  <div class="viewport">
    <div class="rules-modal" v-show="rulesIsShow">
			<div class="rules-mask" @click="rulesHide"></div>
			<div class="rules-content">
				<div class="rules-head">
					<div class="rules-title"></div>
					<div class="rules-close" @click="rulesHide"></div>
				</div>
				<ul class="rules-ul">
					<li><span>1</span>充值豪礼任务，必须在充值页面内进行充值，才可以完成任务；</li>
					<li><span>2</span>红包领取任务，点击书架或开屏红包并领取，才可以完成任务；</li>
					<li><span>3</span>任务所获得的礼券等同于金币，可以直接消费；</li>
					<li><span>4</span>任务所获得的礼券有效期7天</li>
				</ul>
			</div>
		</div>

    <header>
			<div class="banner"></div>
      <a class="rules-tip" @click="rulesShow">活动规则</a>
		</header>
		<section>
			<div class="content">
				<div class="content-item" v-for="(taskItem, index) in taskList" :key="index">
					<div class="item_left">
						<h2>{{taskItem.title}}</h2>
						<p class="cont">{{taskItem.content}}</p>
						<p class="coupon">{{taskItem.coupon}}礼券</p>
					</div>
					<div class="item_right">
						<!-- <div class="prog">{{taskItem.program}}</div> -->
						<a href="javascript:void(0)" @click="get(taskItem,index)" data-remark="111" class="get_btn" :class="'btn'+taskItem.status">{{taskItem.status==0?'领取':'已领取'}}</a>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<script>
import {get} from '@/http/interface'
import { MessageBox, Toast } from 'mint-ui'
import extend from '@/common/js/extend'

export default {
	name: 'Index',
	data: function(){
		return {
			rulesIsShow: false,
			taskList: [],
		}
	},
	created(){
		let self = this;
		self.taskList = window._apitaskList ? window._apitaskList : [];
	},
	methods: {
		rulesShow: function(){
		this.rulesIsShow = true
		},
		rulesHide: function(){
		this.rulesIsShow = false
		},
		get: function (taskItem, _index) {
				let self = this;
				if(!taskItem) return;
				if(taskItem.status==1 || taskItem.status == undefined) return;
				let params = extend({}, {
					remark: taskItem.remark,
					action: window._uri_params.get.action || ''
				}, window._data);
				
				get(params).then(res => {
					if (res.error === 0) {
						if (res.data.content) {
							MessageBox({
								title: res.data.title || '提示',
								message: res.data.content || '确定执行此操作?',
								confirmButtonText: res.data.btn || '确认',
								showCancelButton: true,
								// closeOnClickModal: false
							}).then((action) => {
								if (action == 'confirm') window.location.href = res.data.url;
							})
						}else{
							Toast({message: res.data.toast});
							self.taskList[_index].status = 1;
						}
					}else {
						Toast({message: res.message});
					}
				})
		
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .viewport{
	width: 750/@rem;
	margin: 0 auto;
	overflow: hidden;
	background-color: #fff;
	padding-bottom: 20/@rem;

	.rules-modal{

		.rules-mask{
			// display: none;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.5);
		}

		.rules-content{
			animation: modal-in .15s linear;

			position: fixed;
			z-index: 2;
			background-color: #fff;
			top: 50%;
			left: 50%;
			width: 86%;
			margin-top: -30%;
			margin-left: -43%;
			border-radius: 10/@rem;
			color: #333;
			font-weight: 500;
			letter-spacing: 2/@rem;
			font-size: 28/@rem;

			.rules-head{
				position: relative;
				width: 100%;
				height: 78/@rem;

				.rules-title{
					position: absolute;
					top: -17/@rem;
					left: 50%;
					margin-left: -133/@rem;
					z-index: 2;
					width: 267/@rem;
					height: 78/@rem;
					background: url('../common/img/rules_title.png') center no-repeat;
					background-size: contain;
				}
				.rules-close{
					position: absolute;
					top: -87/@rem;
					right: 25/@rem;
					z-index: 2;
					width: 48/@rem;
					height: 87/@rem;
					background: url('../common/img/close.png') center no-repeat;
					background-size: contain;
				}
			}
			
			.rules-ul{
				padding: 20/@rem 30/@rem 50/@rem 40/@rem;
				line-height: 48/@rem;

				span{
					display: inline-block;
					// vertical-align: middle;
					text-align: center;
					background-color: #feeecd;
					width: 35/@rem;
					height: 35/@rem;
					line-height: 33/@rem;
					border-radius: 50%;
					color: #555;
					margin-right: 8/@rem;
					font-size: 24/@rem;
				}
			}
		}
	}
	
	.banner{
		width: 750/@rem;
		height: 116/@rem;
		background: url('../common/img/banner.png') center no-repeat;
		background-size: contain;
	}

	.rules-tip{
		display: inline-block;
		margin-left: 580/@rem;
		margin-top: 10/@rem;
		width: 200/@rem;
		height: 54/@rem;
		line-height: 58/@rem;
		color: #a38244;
		border: 4/@rem solid #ecce95;
		font-size: 29/@rem;
		text-align: center;
		border-radius: 50/@rem;
		box-shadow: 0 0 3/@rem #a38244;

		&:active{
			background-color: #c6c6c6;
			font-size: 28/@rem;
		}
	}

	.content{
		width: 690/@rem;
		padding: 0 30/@rem;
		overflow: hidden;

		.content-item::after{
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1.5/@rem;
			border-bottom: 1.5/@rem solid #ccc;
		}
		.content-item{
			position: relative;
			padding: 40/@rem 0 20/@rem;
			letter-spacing: 2/@rem;
			
			.item_left{
				display: inline-block;
				vertical-align: middle;
				width: 550/@rem;
				line-height: 42/@rem;

				h2{
					font-weight: bold;
					font-size: 32/@rem;
				}
				.cont{
					color: #888;
					font-size: 26/@rem;
					.text-overflow();
				}
				.coupon{
					color: #ffbc4c;
					padding-left: 50/@rem;
					position: relative;
					font-size: 26/@rem;
				}
				.coupon:after{
					content: '';
					position: absolute;
					top: 8/@rem;
					left: 5/@rem;
					width: 36/@rem;
					height: 23/@rem;
					background: url('../common/img/coupon.png') center no-repeat;
					background-size: contain;
				}
			}

			.item_right{
				display: inline-block;
				vertical-align: middle;
				width: 130/@rem;
				text-align: center;

				.prog{
					font-size: 28/@rem;
				}

				.get_btn{
					width: 130/@rem;
					height: 50/@rem;
					line-height: 53/@rem;
					display: block;
					color: #fff;
					border-radius: 50/@rem;
					font-size: 26/@rem;
				}

				.btn0{
					background-color: #fd7f5d;
					box-shadow: 0 0 5/@rem #333;

					&:active{
						// transform: scale(.9);
						box-shadow: 2/@rem 2/@rem 5/@rem #333;
						background-color: #f76036;
						font-size: 25/@rem;
					}
				}
				.btn1{
					background-color: #c4c4c4;
				}
				// .btn2{
				// 	background-color: #b0e279;
				// }
			}
		}

		.content-item:last-child{
			border-bottom: none;
		}
  }
  @keyframes modal-in {
    0% {
      opacity: 0;
      transform: scale(.5, .5);
    }
    100% {
      opacity:1;
      transform: scale(1, 1);
    }
  }
}
</style>
