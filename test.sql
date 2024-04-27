INSERT INTO "public"."Pet" (
    "id", "type", "name", "description",
    "image", "gender", "sterilized",
    "hasPassport", "health", "dateOfBirth"
) VALUES
(gen_random_uuid(), 'cat', 'Шлепа',
'Ласковый котик, любит ИФИЯК и нюхать мяту',
'cat.png', true, true, true, 'great', '2022-01-01'
),
(gen_random_uuid(), 'cat', 'Маруся',
'Чистоплотная и любвеобильная девочка',
'cat.png', true, true, true, 'great', '2023-01-01'
),
(gen_random_uuid(), 'dog', 'Джек',
'Просто хороший мальчик, любит грызть мебель',
'dog.png', true, true, true, 'great', '2023-01-01'
),
(gen_random_uuid(), 'hamster', 'Виталик',
'Хомячьё - дурачьё',
'hamster.png', true, true, true, 'great', '2024-03-01'
);

INSERT INTO "public"."Pet" (
    "id", "type", "name", "description",
    "image", "gender", "sterilized",
    "hasPassport", "health", "dateOfBirth"
) VALUES
(gen_random_uuid(), 'cat', 'Жорик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
(gen_random_uuid(), 'cat', 'Борик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
(gen_random_uuid(), 'cat', 'Жопик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
(gen_random_uuid(), 'cat', 'Анатолий',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
(gen_random_uuid(), 'cat', 'Демьян',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
);