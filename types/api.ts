/**
 * Категория продукта
 * @example "RANKS"
 */
export enum Category {
    RANKS = 'RANKS',
    BOOSTERS = 'BOOSTERS',
    CASES = 'CASES',
    RESOURCES = 'RESOURCES',
    OTHER = 'OTHER'
}

/**
 * Категория длительности продукта
 * @example "PERMANENT"
 */
export enum ValidityType {
    PERMANENT = 'PERMANENT',
    TEMPORARY = 'TEMPORARY'
}

/**
 * Длительность продукта
 * @example "MONTHLY"
 */
export enum ValidityPeriod {
    MONTHLY = 'MONTHLY',
    LIFE_TIME = 'LIFE_TIME'
}

export interface ProductOutDto {
    /**
     * Идентификатор продукта
     * @format uuid
     * @example "00000000-0000-0000-0000-000000000000"
     */
    id?: string;
    /**
     * Название продукта
     * @example "VIP"
     */
    name?: string;
    /**
     * Описание продукта (markdown support)
     * @example "Подписка на *VIP-статус* на _30 дней_"
     */
    description?: string | null;
    /**
     * Цена продукта без скидки
     * @format double
     * @example 1000.02
     */
    priceWithoutDiscount?: number;
    /**
     * Цена продукта со скидкой
     * @format double
     * @example 500.01
     */
    priceWithDiscount?: number;
    /**
     * Ссылка картинки продукта
     * @example "/public/files/f-00000000-0000-0000-0000-000000000000-example.png"
     */
    imagePath?: string | null;
    /**
     * ID файла картинки
     * @example "f-00000000-0000-0000-0000-000000000000"
     */
    imageId?: string | null;
    /**
     * Ссылка на предыдущий товар для расчета цены доплаты (если товар участвует в системе "Доплата"
     * @format uuid
     * @example "00000000-0000-0000-0000-000000000000"
     */
    previousProductForTopUpId?: string | null;
    /** Категория продукта */
    category?: Category;
    /** Категория длительности продукта */
    validityType?: ValidityType;
    /** Длительность продукта */
    validityPeriod?: ValidityPeriod;
    /** Скидка c id */
    discount?: any;
    /**
     * Порядковый номер для сортировки
     * @format int32
     * @example 0
     */
    order?: number;
    /**
     * Куплен ли товар?
     * @example true
     */
    isAlreadyBought?: boolean | null;
    /**
     * Количество покупаемого товара
     * @format int32
     * @example 1
     */
    quantity: number;
    singlePurchase?: boolean;
}
