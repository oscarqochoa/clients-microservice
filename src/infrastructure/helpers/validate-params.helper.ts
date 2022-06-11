export class ValidateParams {

    public static page(page: any): number {
        if (!page || page == 0 || page == '0'
            || page == null || page == undefined) {
            return 1;
        } else {
            return parseInt(page);
        }
    }

    public static perPage(perPage: any): number {
        if (!perPage || perPage == 0 || perPage == '0'
            || perPage == null || perPage == undefined) {
            return 1;
        } else {
            return parseInt(perPage);
        }
    }

    public static string(param: any): string {
        if (!param || param == 0 || param == '0'
            || param == null || param == undefined) {
            return "";
        } else {
            return param.toString();
        }
    }

}