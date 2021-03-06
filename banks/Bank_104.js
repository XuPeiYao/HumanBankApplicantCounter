var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Bank_104 = (function () {
    function Bank_104() {
    }
    Bank_104.prototype.getApplicantCount = function (url, min, max) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new HttpClient().getAsync(url)];
                    case 1: return [2 /*return*/, (_a.sent()).toJSON().total];
                }
            });
        });
    };
    Bank_104.prototype.initList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scrollFunction = function () { return __awaiter(_this, void 0, void 0, function () {
                    var jobList, i, job, id, temp, countInfo, count;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                jobList = document.querySelectorAll(".j_cont");
                                if (jobList.length == 0) {
                                    jobList = document.querySelectorAll(".job-list-item");
                                }
                                if (jobList.length == 0) {
                                    jobList = document.querySelectorAll(".joblist_cont");
                                }
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < jobList.length)) return [3 /*break*/, 4];
                                job = jobList[i].querySelector(".apply_job");
                                if (job == null)
                                    job = jobList[i];
                                if (job && job['HumanBankApplicantCounter'] == true)
                                    return [3 /*break*/, 3];
                                job['HumanBankApplicantCounter'] = true;
                                id = job.getAttribute("id");
                                if (!/^\d+$/.test(id)) {
                                    temp = jobList[i].querySelector("input[name='to_cookie']");
                                    if (temp == null) {
                                        id = jobList[i].getAttribute("data-job-no");
                                    }
                                    else {
                                        id = temp.value;
                                    }
                                }
                                countInfo = jobList[i].querySelector(".candidates_summary>a");
                                if (countInfo == null)
                                    countInfo = jobList[i].querySelector(".float_R > a");
                                if (countInfo == null)
                                    countInfo = jobList[i].querySelector(".gtm-list-apply");
                                return [4 /*yield*/, this.getApplicantCount(Bank_104.api + id, 0, 0)];
                            case 2:
                                count = _a.sent();
                                try {
                                    countInfo.innerHTML = count + " \u4EBA\u61C9\u5FB5";
                                }
                                catch (e) { }
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                window.onscroll = this.scrollFunction;
                this.scrollFunction();
                return [2 /*return*/];
            });
        });
    };
    Bank_104.prototype.initPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, count, countInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = document.getElementsByName("jobno")[0].value;
                        return [4 /*yield*/, this.getApplicantCount(Bank_104.api + id, 0, 0)];
                    case 1:
                        count = _a.sent();
                        countInfo = document.querySelector(".function>.sub>a");
                        countInfo.innerHTML = count + " \u4EBA\u61C9\u5FB5";
                        return [2 /*return*/];
                }
            });
        });
    };
    return Bank_104;
}());
Bank_104.api = "https://www.104.com.tw/jb/104i/applyAnalysisToJob/sex?job_no=";
App.counter = new Bank_104();
