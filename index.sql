SELECT "MdaPotenciaInstaladaKW::integer" * FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" LIMIT 5

-- Montar uma query
CAST(amount AS DECIMAL(10,2))
SELECT "MdaPotenciaInstaladaKW", "DscPorte", "SigTipoGeracao", "DthAtualizaCadastralEmpreend", "SigUF", "SigAgente"
FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" WHERE "DthAtualizaCadastralEmpreend" BETWEEN '2019-01-01' AND '2019-12-31'

SELECT SUM("MdaPotenciaInstaladaKW") AS total FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" WHERE "DthAtualizaCadastralEmpreend" BETWEEN '2019-01-01' AND '2019-12-31'


SELECT "MdaPotenciaInstaladaKW::", "DscPorte", "SigTipoGeracao", "SigUF", "SigAgente", DATE_TRUNC('month', "DthAtualizaCadastralEmpreend") AS month,
FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" WHERE "DthAtualizaCadastralEmpreend" BETWEEN '2019-01-01' AND '2019-12-31'

SELECT * FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" WHERE "DthAtualizaCadastralEmpreend" BETWEEN '2019-01-01' AND '2019-08-30'

SELECT TO_CHAR("DthAtualizaCadastralEmpreend", 'Mon') AS "mes" FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" LIMIT 5

Select DATE_TRUNC ('month', name_of_column) count (name_of_column) from name_of_table GROUP BY DATE_TRUNC ('month', name_of_column);

SELECT DATA_TRUNC('month', DthAtualizaCadastralEmpreend) FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" GROUP BY DATA_TRUNC('month', DthAtualizaCadastralEmpreend);

SELECT aggregate_function (name_of_column), EXTRACT(MONTH FROM name_of_column) FROM name_of_table GROUP BY EXTRACT (MONTH FROM name_of_column);

SELECT aggregate_function("DthAtualizaCadastralEmpreend"), EXTRACT(MONTH FROM "DthAtualizaCadastralEmpreend") FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" GROUP BY EXTRACT (MONTH FROM "DthAtualizaCadastralEmpreend")


#Vou fazer uma query por mês

SELECT "MdaPotenciaInstaladaKW", "DscPorte", "SigTipoGeracao", "DthAtualizaCadastralEmpreend", "SigUF", "SigAgente"
FROM "b1bd71e7-d0ad-4214-9053-cbd58e9564a7" WHERE "DthAtualizaCadastralEmpreend" BETWEEN '2019-01-01' AND '2019-01-31'