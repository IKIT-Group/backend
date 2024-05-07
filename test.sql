-- PETS
DELETE FROM "public"."Pet";

INSERT INTO "public"."Pet" (
    "type", "name",
    "description",
    "image", "gender", "sterilized", "hasPassport", "health", "dateOfBirth"
) VALUES
('cat', 'Шлепа',
'Ласковый котик, любит ИФИЯК и нюхать мяту',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Маруся',
'Чистоплотная и любвеобильная девочка',
'cat.png', true, true, true, 'great', '2023-01-01'
),
('dog', 'Джек',
'Просто хороший мальчик, любит грызть мебель',
'dog.png', true, true, true, 'great', '2023-01-01'
),
('hamster', 'Виталик',
'Хомячьё - дурачьё',
'hamster.png', true, true, true, 'great', '2024-03-01'
);

INSERT INTO "public"."Pet" (
    "type", "name", "description",
    "image", "gender", "sterilized",
    "hasPassport", "health", "dateOfBirth"
) VALUES
('cat', 'Жорик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Борик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Жопик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Анатолий',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Демьян',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
);

-- PRODUCTS
DELETE FROM "public"."Product";

INSERT INTO "public"."Product" (
    "type", "name",
    "image", "price", "oldPrice"
) VALUES
('food', 'Сухой корм Edel Adult для взрослых стерелизованных кошек, 10 кг.',
'food.png', 4842, null
),
('food', 'Сухой корм Edel Adult для взрослых стерелизованных кошек, 1.5 кг.',
'food.png', 972, 1050
);