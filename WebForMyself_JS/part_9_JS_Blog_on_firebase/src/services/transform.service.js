//  DbDataTransformService
export class TransformService {
    static fireBaseObjectToArray(fireBaseData) {
        return Object.keys(fireBaseData).map(key => {
            console.log(key);
            const dbRecord = fireBaseData[key]
            dbRecord.id = key;
            // console.log(dbRecord);
            return dbRecord;
        })
    }
}