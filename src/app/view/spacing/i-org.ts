export interface IOrg {
    createDate: string;
    name: string;
    org_id: string;
    parent: string;
    stId: string;
    type: string;
    children: IOrg[]
}
