INSERT INTO "public"."Pet" (
    "id", "type", "name", "dateOfBirth", "gender", "sterilized", "hasPassport", "health"
) VALUES
(gen_random_uuid(), 'cat', 'Fluffy', '2015-06-01', true, true, true, 'great'),
(gen_random_uuid(), 'dog', 'Rex', '2017-10-15', false, false, false, 'good'),
(gen_random_uuid(), 'cat', 'Whiskers', '2018-03-20', true, true, true, 'bad'),
(gen_random_uuid(), 'dog', 'Fido', '2016-05-30', false, true, false, 'disabled'),
(gen_random_uuid(), 'cat', 'Snowball', '2014-07-01', false, true, false, 'great'),
(gen_random_uuid(), 'dog', 'Buddy', '2018-11-20', true, true, true, 'good'),
(gen_random_uuid(), 'cat', 'Mittens', '2019-04-25', false, false, false, 'bad'),
(gen_random_uuid(), 'dog', 'Max', '2017-06-15', true, false, true, 'disabled'),
(gen_random_uuid(), 'cat', 'Oliver', '2013-08-01', true, false, true, 'great'),
(gen_random_uuid(), 'dog', 'Charlie', '2019-12-25', false, true, false, 'good'),
(gen_random_uuid(), 'cat', 'Simba', '2020-05-05', true, false, true, 'bad'),
(gen_random_uuid(), 'dog', 'Cooper', '2018-07-15', false, true, false, 'disabled');