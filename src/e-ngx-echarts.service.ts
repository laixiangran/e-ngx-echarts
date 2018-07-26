import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable()
export class ENgxEchartsService {

	constructor() {
	}

	/**
	 * 获取全局 echarts 对象
	 */
	get echarts(): any {
		return echarts;
	}

	/**
	 * 包装 echarts.graphic
	 */
	get graphic(): any {
		return this._checkEcharts() ? echarts.graphic : undefined;
	}

	/**
	 * 包装 echarts.init
	 */
	get init(): any {
		return this._checkEcharts() ? echarts.init : undefined;
	}

	/**
	 * 包装 echarts.connect
	 */
	get connect(): any {
		return this._checkEcharts() ? echarts.connect : undefined;
	}

	/**
	 * 包装 echarts.disconnect
	 */
	get disconnect(): any {
		return this._checkEcharts() ? echarts.disconnect : undefined;
	}

	/**
	 * 包装 echarts.dispose
	 */
	get dispose(): any {
		return this._checkEcharts() ? echarts.dispose : undefined;
	}

	/**
	 * 包装 echarts.getInstanceByDom
	 */
	get getInstanceByDom(): any {
		return this._checkEcharts() ? echarts.getInstanceByDom : undefined;
	}

	/**
	 * 包装 echarts.registerMap
	 */
	get registerMap(): any {
		return this._checkEcharts() ? echarts.registerMap : undefined;
	}

	/**
	 * 包装 echarts.getMap
	 */
	get getMap(): any {
		return this._checkEcharts() ? echarts.getMap : undefined;
	}

	/**
	 * 包装 echarts.registerTheme
	 */
	get registerTheme(): any {
		return this._checkEcharts() ? echarts.registerTheme : undefined;
	}

	private _checkEcharts() {
		if (echarts) {
			return true;
		} else {
			console.error('[e-ngx-echarts] 全局 echarts 对象未加载！');
			return false;
		}
	}
}
