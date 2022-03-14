<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
version="1.0">
    <xsl:template match="/">
    <html>
        <body><xsl:text>&#10;</xsl:text>
            <h1><xsl:value-of select="secondary-school/name"></xsl:value-of></h1>
            <xsl:apply-templates />
        </body><xsl:text>&#10;</xsl:text>
    </html>
    </xsl:template>

    <xsl:template match="web">
        <p>Web Page: <a>
            <xsl:attribute name="href">
                <xsl:value-of select="." />
            </xsl:attribute>
            <xsl:value-of select="." />
            </a>
        </p>
    </xsl:template>

    <xsl:template match="cycles">
        <ul>
            <xsl:apply-templates />
        </ul>
    </xsl:template>

    <xsl:template match="cycle/name">
        <li><xsl:value-of select="." /></li>
    </xsl:template>
    

</xsl:stylesheet>